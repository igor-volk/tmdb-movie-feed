import React from "react";
import Select from 'react-select';
import RatingComponent from 'react-star-rating-component';
import "../styles/MovieFeed.css";

import withData from "./DataProvider";

const MovieFeed = ({ movies, genres, rating, onGenresSelect, onRateSelect }) => (
  <div className="movie-feed">
    <div className="filters">
      <label htmlFor="genre-select">Genres: </label>
      <div className="select-container">
        <Select
          id="genre-select"
          isMulti
          isSearchable
          isCreatable
          options={getGenresSelectOptions(genres)}
          onChange={onGenresSelect}
          aria-label="genre"
          width={200}
        />
      </div>
      <label htmlFor="rating-select">Rating: </label>
      <RatingComponent
        name="rating-component"
        id="rating-select"
        className="rating"
        starCount={10}
        value={rating}
        onStarClick={onRateSelect}
      />
    </div>
    <div className="movie-container">
      { movies.length === 0 && <div className="error-message">No results found</div> }
      { movies.map(renderMovieWithGenres(genres)) }
    </div>
  </div>
);

const renderMovieWithGenres = genres => (movie, index) => (
  <div className="movie" key={index}>
    <div className="title">{movie.title}</div>
    <img src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} />
    <div className="genres">{getGenreNames(movie.genre_ids, genres)}</div>
    <div className="average-vote">{movie.vote_average}</div>
  </div>
);

const getGenreNames = (ids, genres) => genres
  .filter(genre => ids.findIndex(id => id === genre.id) !== -1)
  .map(genre => genre.name)
  .join(', ');

const getGenresSelectOptions = genres => genres.map(genre => ({
  value: genre.id,
  label: genre.name,
}));

export default withData(MovieFeed);
export {
  MovieFeed // export without data so we can test the component in isolation
}
