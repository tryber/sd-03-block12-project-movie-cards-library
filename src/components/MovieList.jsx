// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const dataMovies = this.props.movies;
    return dataMovies
      .map(
        ({ title, subtitle, storyline, rating, imagePath }) =>
          <MovieCard
            key={title}
            title={title}
            subtitle={subtitle}
            storyline={storyline}
            rating={rating}
            imagePath={imagePath}
          />);
  }
}
