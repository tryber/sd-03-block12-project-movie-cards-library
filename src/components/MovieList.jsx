// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import dataMovies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {dataMovies.map((element) => <MovieCard key={element.title} />)}

      </div>
    );
  }
}

export default MovieList;
