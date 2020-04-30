import React from 'react';
import MovieCard from './components/MovieCard';

const MovieList = () => (
  <div>
    {this.props.movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    ))}
  </div>
);

export default MovieList;
