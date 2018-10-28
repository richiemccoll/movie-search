import SearchResult from "../models/SearchResult";

class MovieService {
  constructor() {
    this.url = "https://api.themoviedb.org";
    this.api_key = "695c6d49137434af76932cef6b294349";
  }

  generateSearchResource = query => `${this.url}/3/search/movie?api_key=${
    this.api_key
  }&language=en-US&query=${query}&page=1&include_adult=false`;

  search = async (query) => {
    // Check session storage cache for query hit,
    // return that without making the network request if we have it.
    try {
      const searchUrl = this.generateSearchResource(query);
      const response = await fetch(searchUrl);
      const data = await response.json();
      const transformSearchResults = data.results.map(result => new SearchResult(result));
      return { data: transformSearchResults, totalResults: data.total_results, error: false };
    } catch (e) {
      return { error: true, data: e };
    }
  };
}

export default MovieService;
