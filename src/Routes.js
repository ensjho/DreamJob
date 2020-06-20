import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Home from "./Home";
import CompanyList from "./CompanyList"

/** Site-wide routes.
 */

function Routes() {

  return (
    <div className="pt-5">
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route exact path="/companies" >
          <CompanyList/>
        </Route>
        {/* <Route exact path="/jobs" >
          <Jobs />
        </Route> */}
        {/* <Route exact path="/companies/:handle" >
          <CompanyDetail />
        </Route>
        <Route path="/profile">
          <ProfileForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
