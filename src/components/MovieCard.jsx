// implement MovieCard component here
import React from 'react';
import MovieList from './MovieList';

export default class MovieCard extends React.Component {
  render() {
    const dataMovies = this.props.movies
    return (
      <section>
        {dataMovies.map(
          ({ title, subtitle, storyline, rating, imagePath }) => 
          <MovieList
            key={title}
            title={title} 
            subtitle={subtitle}
            storyline={storyline}
            rating={rating}
            imagePath={imagePath} /> )}
      </section>
    );
  }
}