import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movies">
        {this.props.movies}
        <MovieCard movies={movies[0]} />
        <MovieCard movies={movies[1]} />
        <MovieCard movies={movies[2]} />
        <MovieCard movies={movies[3]} />
        <MovieCard movies={movies[4]} />
      </div>
    );
  }
}

export default MovieList;
