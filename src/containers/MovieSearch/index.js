import React, { Component } from "react";
import MovieService from "../../services/Movie";

class MovieSearch extends Component {
  state = {
    searchData: [],
    searchError: "",
    noResults: false,
  };

  movieService = new MovieService();

  handleMovieSearch = async (searchTerm) => {
    const { error, data, totalResults } = await this.movieService.search(searchTerm);

    if (error) {
      return this.setState(() => ({ ...this.state, searchError: data }));
    }

    if (totalResults === 0) {
      return this.setState(() => ({ ...this.state, noResults: true, searchData: [] }));
    }

    return this.setState(() => ({ ...this.state, searchData: data, noResults: false }));
  };

  render() {
    return this.props.children({
      searchData: this.state.searchData,
      searchError: this.state.searchError,
      noResults: this.state.noResults,
      handleMovieSearch: this.handleMovieSearch,
    });
  }
}

export default MovieSearch;
