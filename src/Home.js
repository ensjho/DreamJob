import React from "react";
import { Link } from "react-router-dom";
import moon from "./moon.svg"
import "./Home.css";

/** Homepage of site.
 * Shows welcome message or login/register buttons.
 */

function Homepage() {
  // const { currentUser } = useContext(UserContext);
  // console.debug("Homepage", "currentUser=", currentUser);
  let currentUser;
  return (
    <div className="Homepage">
      <div className="container text-center">
        <div className="text-info homepage-title mb-4 font-weight-bold">
          <span>DreamJob  <img src={moon} alt="moon" className="moon"></img> </span>
        </div>
        {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
        <p className="text-info lead mb-5">All the jobs in one, convenient place. Get your dream job today!</p>
        {currentUser
          ? <h2>
              Welcome Back, {currentUser.first_name || currentUser.username}!
            </h2>
          : (
            <p>
              <Link className="btn btn-lg btn-primary font-weight-bold mr-3" to="/login">
                Log in
              </Link>
              <Link className="btn btn-lg btn-primary font-weight-bold" to="/register">
                Sign up
              </Link>
            </p>
          )}
      </div>
    </div>
  );
}

export default Homepage;

