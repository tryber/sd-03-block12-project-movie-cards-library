import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {

  render(movies) {
    return (
      <MovieCard movies={movies} />
    );
  }
}

export default MovieList;
