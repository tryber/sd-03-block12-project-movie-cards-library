// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((e) => <MovieCard key={e.title} movie={e} />)}
      </div>
    );
  }
}

export default MovieList;
