import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";


it("matches snapshot with logo", function () {
  const { asFragment } = render(
    <CompanyCard
      handle="rithm"
      name="Rithm School"
      description="Become an exceptional developer in 16 weeks."
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

