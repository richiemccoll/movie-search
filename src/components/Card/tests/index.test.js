import React from "react";
import renderer from "react-test-renderer";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Card from "..";

Enzyme.configure({ adapter: new Adapter() });

describe("Card", () => {
  it("should render correctly", () => {
    const initialProps = {
      image: "url-to-image",
      title: "test",
      overview: "this is a test",
      popularity: 10,
      releaseDate: "today",
    };
    const component = renderer.create(<Card {...initialProps} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
