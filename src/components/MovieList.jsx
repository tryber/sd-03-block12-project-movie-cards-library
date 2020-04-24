// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => {
          const { title } = movie;
          return (
            <MovieCard
              movie={movie}
              key={title}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieList;
