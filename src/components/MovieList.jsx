// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className='movie-list'>
        {movies.map((movie) => <MovieCard key={movie.title} cards={movie} />)}
      </div>
    );
  }
}

export default MovieList;
