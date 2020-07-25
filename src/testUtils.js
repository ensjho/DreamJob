import React from "react";
import AuthContext from "./auth/AuthContext";

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null
};

const UserProvider = ({ children, currentUser = demoUser }) => (
  <AuthContext.Provider value={{currentUser}}>
    {children}
  </AuthContext.Provider>
);

export default UserProvider;