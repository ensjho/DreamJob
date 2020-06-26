import React from "react";
import { render } from "@testing-library/react";
import defaultLogo from "../img/build.svg";
import CompanyCard from "./CompanyCard";


it("matches snapshot with logo", function () {
  const { asFragment } = render(
    <CompanyCard
      handle="rithm"
      name="Rithm School"
      description="Become an exceptional developer in 16 weeks."
      logo_url={defaultLogo}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
  const { asFragment } = render(
    <CompanyCard
      handle="algo"
      name="Algo School"
      description="Become a mediocre developer in 160 weeks."
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
