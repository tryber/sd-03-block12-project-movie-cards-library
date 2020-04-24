import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    return (
      <section>
        { this.props.movies.map((movie) =>
          <MovieCard key={ movie.title } movie={ movie } />) }
      </section>
    );
  }
}
