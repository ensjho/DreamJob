import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moon from "../img/moon.svg"
import "./Home.css";
import AuthContext from "../auth/AuthContext";

/** Homepage of site.
 * Shows welcome message or login/register buttons.
 */

function Homepage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <div className="text-info homepage-title mb-4 font-weight-bold">
          <span>DreamJob  <img src={moon} alt="moon" className="moon"></img> </span>
        </div>
        {currentUser
          ?
          <h3 className="text-info mb-5"><b>Welcome Back!</b></h3>
          : (
            <div>
              <p className="text-info lead mb-5">All the jobs in one, convenient place. Get your dream job today!</p>
              <p>
                <Link className="btn btn-primary font-weight-bold mr-3" to="/login">
                  Log in
              </Link>
                <Link className="btn btn-primary font-weight-bold" to="/login">
                  Sign up
              </Link>
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */

export default Homepage;

