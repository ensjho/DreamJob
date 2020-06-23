import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CompanyList from "../companies/CompanyList"
import CompanyDetail from "../companies/CompanyDetail"
import JobList from "../jobs/JobList"
import AuthContext from "../auth/AuthContext";
import Profile from "../general/Profile";

/** Private Routes
 *  Authorized to only logged in users
 */

function PrivateRoutes() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Switch>
      <Route exact path="/companies" >
        <CompanyList />
      </Route>

      <Route exact path="/companies/:handle" >
        <CompanyDetail />
      </Route>

      <Route exact path="/jobs" >
        <JobList />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Redirect to="/" />
    </Switch>
  )
}

export default PrivateRoutes;

