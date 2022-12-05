import "./NewUser.css";

import { ClassNames } from "@emotion/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function NewUser() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<form
			className='forms'
			onSubmit={handleSubmit(data => {
				console.log(data);
			})}>
			<p style={{ textTransform: "uppercase" }}>Formularz rejestracyjny </p>
			<input type='text' id='uname' name='uname' pattern='[a-zA-Z0-9]+'></input>
		</form>
	);
}
