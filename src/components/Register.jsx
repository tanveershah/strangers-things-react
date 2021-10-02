import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { BASE_URL, registerUser } from "../api";
import { storeToken } from "../auth";

const Register = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const history = useHistory()

  return (
    <div className="register">
      <h2>New User Registration</h2>
      <form
        className="register-form"
        onSubmit={async (event) => {
            event.preventDefault()
            const {data} = await registerUser(BASE_URL, username, password)
            storeToken(data.token)
            if(data.token) setIsLoggedIn(true)
            history.push('/')
        }}
      >
        <fieldset>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            value={username}
            placeholder="enter username"
            min="5"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            placeholder="enter password"
            min="4"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
