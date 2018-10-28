import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SearchResult from "../../models/SearchResult";

import Card from "../Card";

function SearchResults({ results }) {
  return (
    <Fragment>
      {results.length > 0 ? (
        <ul>
          {results.map((result, idx) => (
            <li key={`${result.title}-${idx}`}>
              <Card
                image={result.image_url}
                title={result.title}
                overview={result.overview}
                releaseDate={result.release_date}
                popularity={result.popularity}
              />
            </li>
          ))}
        </ul>
      ) : null}
      <style jsx>
        {`
          ul {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            max-width: 1120px;
            padding: 1em;
            margin: 0 auto;
          }

          li {
            grid-column: span 12;
            margin-bottom: 1em;
          }

          @media (min-width: 700px) {
            li {
              grid-column: span 6;
            }
          }

          @media (min-width: 1020px) {
            li {
              grid-column: span 4;
            }
          }
        `}
      </style>
    </Fragment>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.instanceOf(SearchResult)),
};

export default SearchResults;
