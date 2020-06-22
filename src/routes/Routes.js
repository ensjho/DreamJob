import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../general/Home";
import CompanyList from "../companies/CompanyList"
import CompanyDetail from "../companies/CompanyDetail"
import JobList from "../jobs/JobList"

/** Site-wide routes.
 *  
 * 
 *  Redirects to homepage if route does not match.
 *  App -> Routes
 */

function Routes() {

  return (
    <div className="pt-5">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/companies" >
          <CompanyList />
        </Route>
        <Route exact path="/companies/:handle" >
          <CompanyDetail />
        </Route>
        <Route exact path="/jobs" >
          <JobList />
        </Route>
        {/* <Route path="/profile">
          <ProfileForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>  */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
