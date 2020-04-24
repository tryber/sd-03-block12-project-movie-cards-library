import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
        {movie.map((movies) => <MovieCard Key={movies.title} movie={movies} />)}
      </div>
    );
  }
}

export default MovieList;
