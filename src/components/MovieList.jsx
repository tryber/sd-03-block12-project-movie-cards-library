import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movie.map((movies) => <MovieCard Key={movies.title} movie={movies} />)}
      </div>
    );
  }
}

export default MovieList;
