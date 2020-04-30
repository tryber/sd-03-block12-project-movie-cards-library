import React from 'react';
import movies from './data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    {this.props.movies}
    return (
      <div className="movies">
        {movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
