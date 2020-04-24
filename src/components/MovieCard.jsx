import React from 'react';
import MovieList from './MovieList';

export default function MovieCard() {
  const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
  return (
    <>
      <img src={imagePath} alt={title} />
      <h4>
        {title}
      </h4>
      
    </>
  );
}
