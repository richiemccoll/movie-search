import React from "react";
import PropTypes from "prop-types";

export default function Card({
  image, title, overview, popularity, releaseDate,
}) {
  return (
    <article>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{overview}</p>
      <small>Release Date - {releaseDate}</small>
      <small>Popularity - {popularity} / 10 </small>
      <style jsx>
        {`
          article {
            max-width: 330px;
            width: 100%;
            padding-bottom: 0.5em;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
          }

          h2 {
            font-size: 24px;
            font-weight: bold;
            padding: 1em;
            padding-bottom: 0;
            width: 280px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          img {
            width: 100%;
            object-fit: fill;
            min-height: 320px;
            max-height: 320px;
          }

          img:before {
            content: "We're sorry, the image below is broken :(";
            display: block;
            margin-bottom: 10px;
          }

          img:after {
            content: "(url: " attr(src) ")";
            display: block;
            font-size: 12px;
          }

          p,
          small {
            padding: 1em;
          }
        `}
      </style>
    </article>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
