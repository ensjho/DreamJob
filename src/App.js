import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes.js"
import Navigation from "./routes/Navigation";
import useLocalStorageToken from "./helpers/useLocalStorageToken"
import Loading from './general/Loading';
import DreamJobApi from "./Api";
import AuthContext from "./auth/AuthContext";
import { decode } from 'jsonwebtoken';

function App() {
  const [loggedInUserLoaded, setloggedInUserLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorageToken();

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = decode(token);
          let currentUser = await DreamJobApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setloggedInUserLoaded(true);
    }
    setloggedInUserLoaded(false);
    getCurrentUser();
  }, [token]);

  /** Handles site-wide signup. */
  async function signup(signupData) {
    try {
      let token = await DreamJobApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide login. */
  async function login(loginData) {
    try {
      let token = await DreamJobApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  };

  if (!loggedInUserLoaded) return <Loading />

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
          <div className="App">
            <Navigation logout={logout} />
            <Routes login={login} signup={signup} />
          </div>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;