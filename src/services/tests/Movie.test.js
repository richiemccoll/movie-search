import { fetchMock } from "fetch-mock";
import MovieService from "../Movie";

import SearchResult from "../../models/SearchResult";

describe("Services - Movie", () => {
  describe("@methods", () => {
    describe("search", () => {
      let service;

      beforeEach(() => {
        service = new MovieService();
      });

      afterEach(() => {
        service = null;
        fetchMock.resetHistory();
      });

      it("should allow a query to be searched for", async () => {
        fetchMock.mock(service.generateSearchResource("test"), {
          results: [{ name: test }],
          total_results: 1,
        });

        const result = await service.search("test");
        expect(result.data[0]).toBeInstanceOf(SearchResult);
        expect(result.error).toBe(false);
        expect(result.totalResults).toBe(1);
      });

      it("should handle any errors and return them with the boolean flag", async () => {
        fetchMock.mock(service.generateSearchResource("invalid"), 404);

        const result = await service.search("invalid");
        expect(result.error).toBe(true);
      });
    });
  });
});
