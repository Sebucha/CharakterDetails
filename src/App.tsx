import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NewUser from "./components/NewUser";
import React from "react";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => {
	return (
		<>
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
			<div className='App'>
				<UserProfile />
				<NewUser />
			</div>
		</>
	);
};

export default App;
