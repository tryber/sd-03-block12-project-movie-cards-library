// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const dataMovies = this.props.movies;
    return dataMovies
      .map(movie => <MovieCard key={movie.title} movie={movie} />);
  }
}
