import React from 'react';
import MovieCard from './components/MovieCard';

const MovieList = () => (
  <div className="movie-list">
    {this.props.movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    ))}
  </div>
);

export default MovieList;
