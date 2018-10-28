import React from "react";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchResults from "..";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchResults", () => {
  it("should render null if no results", () => {
    const result = renderer.create(<SearchResults results={[]} />);
    expect(result).toMatchSnapshot();
  });

  it("should render a list of results", () => {
    const results = [1, 2, 3].map(i => ({
      image_url: `image-url-${i}`,
      title: `title-${i}`,
      overview: `overview-${i}`,
      release_date: `release-date-${i}`,
      popularity: i,
    }));

    const result = renderer.create(<SearchResults results={results} />);
    expect(result).toMatchSnapshot();
  });
});
