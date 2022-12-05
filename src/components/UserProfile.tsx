import "./UserProfile.css";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import React from "react";

export default function UserProfile() {
	const [user, setUser] = useState<User>();

	interface User {
		name: string;
		eye_color: string;
		birth_year: string;
	}

	const apiUrl = "https://swapi.py4e.com/api/people/";

	useEffect(() => {
		function getCharacterDetails(id: string) {
			try {
				axios.get(apiUrl + "/" + id).then((response: AxiosResponse) => {
					setUser(
						[response.data].map(
							({
								name,
								eye_color,
								birth_year,
							}: {
								name: string;
								eye_color: string;
								birth_year: string;
							}) => {
								return { name, eye_color, birth_year };
							}
						)[0]
					);
				});
			} catch (error) {
				console.error(error);
			}
		}
		getCharacterDetails("1");
	}, []);
	console.log(user);
	return (
		<>
			<div className='user-profile-bgc'>
				{user ? (
					<div className='data-details'>
						<p>Name : {user.name}</p>
						<p>age:{user.birth_year}</p>
						<p>eye color:{user.eye_color} </p>
						<img style={{}} src='https://picsum.photos/534/383' />
					</div>
				) : (
					<div>Brak danych...</div>
				)}
			</div>
		</>
	);
}
