import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BASE_URL, loginUser } from "../api";
import { storeToken } from "../auth";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <div className="login">
      <h2>Login</h2>
      <form
        className="login-form"
        onSubmit={async (event) => {
          event.preventDefault();
          const { data } = await loginUser(BASE_URL, username, password);
          console.log(data, "data");
          storeToken(data.token);
          setIsLoggedIn(true);
          setUsername("");
          setPassword("");
          history.push("/profile");
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
        <button type="submit">Login</button>

        <Link to="/register">Click to register</Link>
      </form>
    </div>
  );
};

export default Login;
