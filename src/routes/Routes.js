import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../general/Home";
import LoginSignup from "../auth/LoginSignup"
import PrivateRoutes from "./PrivateRoutes";

/** Site-wide routes.
 * 
 *  PrivateRoutes(Authroized to only logged in Users):
 *  -CompanyList
 *  -CompanyDetail
 *  -JobList
 *  -ProfileForm
 * 
 *  App -> Routes
 */

function Routes({ login, signup }) {
  return (
    <div className="pt-5">
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <LoginSignup login={login} signup={signup} />
        </Route>

        <PrivateRoutes />

        <Redirect to="/" />

      </Switch>
    </div>
  );
}

export default Routes;
