import React from "react";

function SearchForm({ handleSearchSubmit, error }) {
  const inputRef = React.createRef();
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchSubmit(inputRef.current.value);
        }}
      >
        <div role="search">
          <label className="search-label" htmlFor="search">
            Search for a movie
            {error ? (
              <p className="error" role="alert">
                {error}
              </p>
            ) : null}
          </label>

          <input
            id="search"
            className="search-input"
            type="text"
            ref={inputRef}
            aria-invalid={!!error}
            required
          />
          <input className="button" type="submit" value="Search" />
        </div>
        <style jsx>
          {`
            form {
              border: 1px solid rgba(0, 0, 0, 0.15);
              border-radius: 5px;
              padding: 50px;
            }
            .search-label {
              display: block;
              font-size: 18px;
              margin-bottom: 5px;
            }

            .search-input {
              display: block;
              width: 100%;
              font-size: 16px;
              border-radius: 5px;
              border: 2px solid grey;
              -webkit-appearance: none;
              padding: 1em 0.5em;
              margin-bottom: 8px;
              box-sizing: border-box;
            }

            .error {
              display: block;
              background-color: #f44336;
              padding: 10px;
              border-radius: 5px;
            }

            .button {
              background: #2979ff;
              color: #fff;
              border: 0;
              border-radius: 5px;
              appearance: none;
              cursor: pointer;
              font-size: 16px;
              padding: 1em 2.5em;
              border: 2px solid transparent;
            }
          `}
        </style>
      </form>
    </section>
  );
}

export default SearchForm;
