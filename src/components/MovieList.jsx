import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    return (
      <section style={{ backgroundColor: 'blue', height: '10px'}}>
        {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
      </section>
    );
  }
}
