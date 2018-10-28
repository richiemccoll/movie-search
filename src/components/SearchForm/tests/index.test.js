import React from "react";
import renderer from "react-test-renderer";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchForm from "..";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchForm", () => {
  it("should render correctly", () => {
    const component = renderer.create(<SearchForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call handleSubmit with the value of the input field", () => {
    const searchSubmitSpy = jest.fn();
    const initial = mount(<SearchForm handleSearchSubmit={searchSubmitSpy} />);
    initial.find("#search").simulate("change", { target: { value: "test " } });
    initial.find("form").simulate("submit", { preventDefault: Function.prototype });
    expect(searchSubmitSpy).toBeCalled();
  });

  it("should display some sort of error to the user", () => {
    const initial = shallow(<SearchForm />);
    expect(initial.find(".error").length).toBe(0);
    expect(initial.find("#search").html()).toMatchSnapshot();

    const result = initial.setProps({ error: "This is a message " });
    expect(result.find(".error").length).toBe(1);
    expect(initial.find("#search").html()).toMatchSnapshot();
  });
});
