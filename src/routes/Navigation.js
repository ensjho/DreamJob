import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import "./Navigation.css";

/** Renders Navigation Bar 
 * => if user Logged in => renders LoggedInNav()
 * => if user NOT logged in => renders loggedOutNav()
 * App -> Navigation
 */

function Navigation({logout}) {
  const  { currentUser } = useContext(AuthContext);

  /** If user is logged in and currentUser is defined 
   *       => renders logged in navbar
   *  else => renders logged out navbar
   */
  let navigationBar;
  if (currentUser) {
    navigationBar = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link text-info" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link text-info" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link text-info" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-info" to="/" onClick={logout}>
            Log out
          </Link>
        </li>
      </ul>
    );
  } else {
    navigationBar = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link text-info font-weight-bold" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    )
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand text-info font-weight-bold" to="/">
        DreamJob
      </Link>
      {navigationBar}
    </nav>
  );
}

export default Navigation;
