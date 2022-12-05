import "../styles/UserProfile.css";

import { BasicUserT } from "../types";
import React from "react";

const UserProfile: React.FC<{ user: BasicUserT } & { setId: React.Dispatch<React.SetStateAction<number>> }> = ({ user, setId }) => {
  return (
    <>
      <div className='user-profile-bgc'>
        <div className='img-styles'>
          <img src={"https://picsum.photos/534/383"} alt="random picsum" />
        </div>

        <div className='data-details'>
          <p>Name: {user.name}</p>
          <p>age: {user.birth_year}</p>
          <p>eye color: {user.eye_color} </p>
        </div>

        <button
          onClick={() => {
            setId(prevId => prevId + 1);
          }}>
          Next
        </button>
        {/* debounce */}
      </div>
    </>
  );
}

export default UserProfile