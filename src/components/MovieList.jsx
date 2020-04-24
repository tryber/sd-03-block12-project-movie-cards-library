// implement MovieList component here
// import movies from '../data';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        { this.props.movie.map((movies) => <MovieCard key={movies.title} movies={movies} />)}
      </div>
    );
  }
}

export default MovieList;
