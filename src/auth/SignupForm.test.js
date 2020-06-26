import React from "react";
import { render } from "@testing-library/react";
import LoginSignup from "./LoginSignup";
import { MemoryRouter } from "react-router";

it("matches snapshot", function() {
  const { asFragment } = render(
    <MemoryRouter>
      <LoginSignup />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
