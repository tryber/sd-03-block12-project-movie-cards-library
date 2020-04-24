// implement MovieCard component here
import React from 'react';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    console.log(rating);
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={imagePath} alt={`Movie ${title}`} />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
