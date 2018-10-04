import "./setupTests";

import React from "react";
import ReactDOM from "react-dom";
import App from "../components/app";
import NavBar from "../components/navbar";
import Timeline from "../components/timeline";

import { shallow } from "enzyme";
import { mount } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("is the parent of a NavBar component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(NavBar).length).toEqual(1);
});

it("token is set to and empty string by defualt", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state("token")).toEqual("");
});

it("does not render a Timeline component when there is no token", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Timeline).length).toEqual(0);
});
