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
    const isInCache = sessionStorage.getItem(query);

    if (isInCache) {
      return { data: JSON.parse(isInCache), error: false };
    }

    try {
      const searchUrl = this.generateSearchResource(query);
      const response = await fetch(searchUrl);
      const data = await response.json();
      const transformSearchResults = data.results.map(result => new SearchResult(result));

      // set response in the session storage cache.
      sessionStorage.setItem(query, JSON.stringify(transformSearchResults));

      return { data: transformSearchResults, totalResults: data.total_results, error: false };
    } catch (e) {
      return { error: true, data: e };
    }
  };
}

export default MovieService;
