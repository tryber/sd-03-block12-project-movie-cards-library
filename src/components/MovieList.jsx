import React from 'react';
import movies from '../data.js';

class MovieList extends React.Component {
  render() {
    return (
      <MovieList movies={movies} />
    );
  }
}

export default MovieList;
