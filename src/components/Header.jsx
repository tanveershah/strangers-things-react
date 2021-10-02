import React from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { removeToken } from "../auth";
import "./Header.css";

const Header = ({ isLoggedIn, setIsloggedIn }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="logo">
        <h1>Stranger's Things</h1>
      </div>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink activeClassName="active" exact to="/addPost">
              Add Post
            </NavLink>

            <button
              onClick={(event) => {
                removeToken();
                setIsloggedIn(false);
                history.push("/login");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink exact to="/login" activeClassName="active">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
