import "./setupTests";

import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../components/navbar";
import SignIn from "../components/sign_in";

import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<NavBar />);
});

it("is the parent of a SignIn component", () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper.find(SignIn).length).toEqual(1);
});
