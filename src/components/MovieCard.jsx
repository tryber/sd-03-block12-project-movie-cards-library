import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <li>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <img src={movie.imagePath} alt={`cover of ${movie.title}`}/>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating}/>
      </li>
    );
  }
}

export default MovieCard;
