import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movies">
        {this.props.movies}
        {movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
