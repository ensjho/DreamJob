import React from "react";
import { render } from "@testing-library/react";
import Company from "./CompanyDetail";
import { MemoryRouter, Route } from "react-router-dom";
import UserContext from "../auth/AuthContext";

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null
};

const UserProvider = ({ children, currentUser = demoUser }) => (
  <UserContext.Provider value={{currentUser}}>
    {children}
  </UserContext.Provider>
);


it("renders without crashing", function() {
  render(
    <MemoryRouter>
      <UserProvider>
        <Company />
      </UserProvider>
    </MemoryRouter>
  );
});

// it("matches snapshot", function() {
//   const { asFragment } = render(
//     <MemoryRouter initialEntries={["/company/ibm"]}>
//       <UserProvider>
//         <Route path="/company/:handle">
//           <Company />
//         </Route>
//       </UserProvider>
//     </MemoryRouter>
//   );
//   expect(asFragment()).toMatchSnapshot();
// });
