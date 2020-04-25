// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((filme) => <MovieCard key={filme.title} movie={filme} />) }
      </div>
    );
  }
}
