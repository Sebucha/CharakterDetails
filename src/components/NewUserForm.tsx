import "../styles/NewUserForm.css";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserRegistrationModel, UserT } from "../types";

import React from "react";
import axios from "axios";
import { useState } from "react";

const EXPECTED_KEYS = [
  "login",
  "password",
  "email",
  "phone",
  "owu"
]

const NewUserForm: React.FC<{ user: UserT }> = ({ user }) => {
  const [formErrors, setFormErrors] = useState<{
    login: boolean;
    password: boolean;
    email: boolean;
    phoneNumber: boolean;
    owu: boolean;
  }>({
    login: false,
    password: false,
    email: false,
    phoneNumber: false,
    owu: false
  });
  const { register, control, handleSubmit } = useForm<UserRegistrationModel>({ defaultValues: { owu: false } });
  const onSubmit: SubmitHandler<UserRegistrationModel> = (data): void => {
    createUser(data)
  }

  const createUser = async (data: UserRegistrationModel) => {
    if (!Object.values(formErrors).every(el => !el)) return;
    try {
      const { name, created, vehicles } = user
      const response = await axios.post<UserRegistrationModel>(
        "https://example/.", { data, star_wars_data: [{ name, created, vehicles }] }
      );
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className='forms' onSubmit={handleSubmit(onSubmit)} onChange={(e: any) => {
      setFormErrors(prevState => ({ ...prevState, [e.target.name]: !e.target.validity.valid }))
    }}>
      <label>
        Login:
        {formErrors.login ? "błąd" : null}
        <input
          required
          type='text'
          id='login'
          autoComplete="username"
          minLength={4}
          maxLength={20}
          {...register("login")}
        />
      </label>
      <label>
        Hasło:
        {formErrors.password ? "błąd" : null}
        <input
          required
          type='password'
          autoComplete="current-password"
          id='password'
          minLength={8}
          {...register("password")}
        />
      </label>
      <label>
        E-mail:
        {formErrors.email ? "błąd" : null}
        <input
          required
          autoComplete="email"
          pattern='[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}'
          type='text'
          {...register("email")}
        />
      </label>
      <label>
        Numer telefonu:
        {formErrors.phoneNumber ? "błąd" : null}
        <input
          id='phone'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
          required
          type='tel'
          {...register("phoneNumber")}></input>
      </label>
      <Controller
        name="owu"
        control={control}
        render={({ field }: any) => (
          <label>
            {formErrors.owu ? "błąd" : null}
            <input
              type='checkbox'
              {...register("owu")}
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
            />
            Akpceptuję regulamin
          </label>
        )}
      />

      <button
        disabled={
          (Object.keys(formErrors).length === 0 && formErrors.constructor === Object) ||
          (!Object.values(formErrors).every(el => !el) &&
            !EXPECTED_KEYS.every(item => formErrors.hasOwnProperty(item)))
        }
        type='submit'
      >
        zapisz
      </button>
    </form>
  );
}

export default NewUserForm