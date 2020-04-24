import React from "react";
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-List">
        {movies.map(movie => <MovieCard key={movies.title} movies={movies} />)}
      </div>
    );
  }
}

export default MovieList;