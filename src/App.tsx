import "./styles/App.css";

import React, { useEffect, useState } from "react";

import NewUserForm from "./components/NewUserForm";
import UserProfile from "./components/UserProfile";
import { UserT } from "./types";
import axios from "axios";

// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";


const API_URL = "https://swapi.py4e.com/api/people/";

const App: React.FC = () => {
  const [user, setUser] = useState<UserT>();
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCharacterDetails(id: string | number) {
      try {
        setIsLoading(true);
        const { data } = await axios.get(API_URL + "/" + id);
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCharacterDetails(id);
  }, [id]);

  return user ? (
    <>
      <div className='App'>
        <div className='position-btn'>
          <button className='new-user-btn'>
            {/* <Link
							to='/newUser'
							style={{ textDecoration: "none", color: "#ffffff" }}>
							formularz rejestracyjny
						</Link> */}
            formularz rejestracyjny
          </button>
        </div>
        <div className="container">
          {!isLoading ? <UserProfile setId={setId} user={user} /> : <>Loading data, please wait...</>}
          {!user ? <>No user available to send the data futher!</> : <NewUserForm user={user} />}
        </div>
      </div>
    </>
  ) : <>There seems to be an error fetching user data. Check logs!</>;
};

export default App;
