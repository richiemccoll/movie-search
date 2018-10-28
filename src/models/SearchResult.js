class SearchResult {
  constructor(data) {
    this.title = data.title;
    this.release_date = data.release_date;
    this.popularity = data.vote_average;
    this.overview = data.overview;
    this.image_url = this.generateImageUrl(data.poster_path);
  }

  generateImageUrl = (imageSlug) => {
    const baseUrl = "http://image.tmdb.org/t/p/";
    const imageSize = "w342";

    return `${baseUrl}${imageSize}${imageSlug}`;
  };
}

export default SearchResult;
