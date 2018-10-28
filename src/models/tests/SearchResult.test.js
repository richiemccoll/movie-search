import SearchResult from "../SearchResult";

describe("Models - SearchResult", () => {
  it("should generate a model based off data", () => {
    const mockPayload = {
      backdrop_path: "/840rbblaLc4SVxm8gF3DNdJ0YAE.jpg",
      genre_ids: [1, 2, 3],
      id: 332562,
      original_language: "en",
      original_title: "A Star Is Born",
      overview:
        "Seasoned musician Jackson Maine discovers—and falls in love with—struggling artist Ally. She has just about given up on her dream to make it big as a singer—until Jack coaxes her into the spotlight. B…",
      popularity: 192.037,
      poster_path: "/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
      release_date: "2018-10-03",
      title: "A Star Is Born",
      video: false,
      vote_average: 7.5,
      vote_count: 1079,
    };

    const result = new SearchResult(mockPayload);
    expect(result).toMatchSnapshot();
  });
});
