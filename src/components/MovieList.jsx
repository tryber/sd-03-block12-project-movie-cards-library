import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList() {
  const { movies } = this.props.movies;
  return (
    movies.map((movie) => <MovieCard key={movie.title} />)
  );
}
