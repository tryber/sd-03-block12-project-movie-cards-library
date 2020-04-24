// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <div key={movie.title}>
            <div>{movie.title}</div>
            <div>{movie.subtitle}</div>
            <div>{movie.storyline}</div>
            <div>{movie.rating}</div>
            <img src={movie.imagePath} alt="foto do jogo" />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
