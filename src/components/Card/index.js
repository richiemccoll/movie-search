import React from "react";
import PropTypes from "prop-types";

const getThumbsRating = (rating) => {
  if (rating > 7) {
    return `👍👍`;
  }

  if (rating >= 4 && rating <= 7) {
    return `👍`;
  }

  return `👎`;
};

export default function Card({
  image, title, overview, popularity, releaseDate,
}) {
  return (
    <article>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{overview}</p>
      <label className="tag release-date">Release Date - {releaseDate}</label>
      <small className="tag popularity">
        Popularity - {popularity} / 10 {getThumbsRating(popularity)}{" "}
      </small>
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

          p {
            margin: 0 auto;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            line-height: 1.2em;
            font-size: 14px;
            height: 20px;
            display: block;
            display: -webkit-box;
            max-width: 400px;
            margin-bottom: 20px;
            padding: 1em;
          }

          .tag {
            display: block;
            padding: 1em;
            border-radius: 5px;
            font-size: 12px;
            color: white;
            width: 50%;
            margin: 1em;
            text-align: center;
          }

          .release-date {
            background-color: #ff9100;
          }

          .popularity {
            background-color: #00e5ff;
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
