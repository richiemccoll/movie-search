import React, { Component } from "react";
import MovieService from "../../services/Movie";

export function handleErrors(previousState, error) {
  return { ...previousState, searchError: error };
}

export function handleNoResults(previousState) {
  return { ...previousState, noResults: true };
}

export function handleResults(previousState, results) {
  return { ...previousState, searchData: results, noResults: false };
}

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
      return this.setState(prevState => handleErrors(prevState, data));
    }

    if (totalResults === 0) {
      return this.setState(prevState => handleNoResults(prevState));
    }

    return this.setState(prevState => handleResults(prevState, data));
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
