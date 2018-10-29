import { handleErrors, handleNoResults, handleResults } from "..";

describe("MovieSearch", () => {
  describe("setState", () => {
    const initialState = {
      searchData: [],
      searchError: "",
      noResults: false,
    };

    it("should update the state if there are errors", () => {
      const result = handleErrors(initialState, "error");
      expect(result).toEqual({ searchData: [], searchError: "error", noResults: false });
    });

    it("should update the state if there are no results", () => {
      const result = handleNoResults(initialState);
      expect(result).toEqual({ searchData: [], searchError: "", noResults: true });
    });

    it("should update the state if there are results", () => {
      const result = handleResults(initialState, [{ result: "test " }]);
      expect(result).toEqual({
        searchData: [{ result: "test " }],
        searchError: "",
        noResults: false,
      });
    });
  });
});
