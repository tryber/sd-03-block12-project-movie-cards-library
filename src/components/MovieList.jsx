import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    };
    return (
      <section style={style}>
        { this.props.movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />) }
      </section>
    );
  }
}
