import "babel-polyfill";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import CSSReset from "./css-reset";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

import MovieSearch from "./containers/MovieSearch";

function App() {
  return (
    <main>
      <CSSReset />
      <MovieSearch>
        {({
          searchError, searchData, noResults, handleMovieSearch,
        }) => (
          <Fragment>
            <SearchForm handleSearchSubmit={handleMovieSearch} error={searchError} />
            {noResults ? <h1>No results found!</h1> : null}
            <SearchResults results={searchData} />
          </Fragment>
        )}
      </MovieSearch>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
