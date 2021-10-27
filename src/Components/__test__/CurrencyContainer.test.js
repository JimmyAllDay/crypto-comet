import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../../App";
// import CurrencyContainer from "../../CurrencyContainer";

Enzyme.configure({ adapter: new Adapter() });

it("App renders non-empty component without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
  //   console.log(wrapper.debug());
});
