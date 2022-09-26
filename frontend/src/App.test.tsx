import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { RecoilRoot } from "recoil";

test.each([/Micro/, /Amaz/, /Face/])("renders Items", (item) => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const linkElement = screen.getByText(new RegExp(item, "i"));
  expect(linkElement).toBeInTheDocument();
});
