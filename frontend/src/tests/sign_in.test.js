import "./setupTests";

import React from "react";
import ReactDOM from "react-dom";
import SignIn from "../components/sign_in";

import { shallow } from "enzyme";

describe("SignIn", () => {
  it("renders a email input", () => {
    expect(shallow(<SignIn />).find("#email").length).toEqual(1);
  });

  it("renders a password input", () => {
    expect(shallow(<SignIn />).find("#password").length).toEqual(1);
  });

  describe("Email input", () => {
    it("should respond to change event and change the state of the SignIn Component", () => {
      const wrapper = shallow(<SignIn />);
      wrapper.find("#email").simulate("change", {
        target: { name: "email", value: "test@test.com" }
      });

      expect(wrapper.state("email")).toEqual("test@test.com");
    });
  });

  describe("Password input", () => {
    it("should respond to change event and change the state of the SignIn Component", () => {
      const wrapper = shallow(<SignIn />);
      wrapper.find("#password").simulate("change", {
        target: { name: "password", value: "tester" }
      });
      expect(wrapper.state("password")).toEqual("tester");
    });
  });

  describe("Submit sign in", () => {
    it("should make a call to the API with details provided", async () => {
      const wrapper = shallow(<SignIn />);
      wrapper.find("#email").simulate("change", {
        target: { name: "email", value: "test@test.com" }
      });
      wrapper.find("#password").simulate("change", {
        target: { name: "password", value: "tester" }
      });
      wrapper.find("#signin").simulate("click");
      expect(wrapper.state.token === "").toEqual(false);
    });
  });
});
