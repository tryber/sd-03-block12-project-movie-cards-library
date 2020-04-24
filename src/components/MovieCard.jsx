import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;

    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
        <p>{imagePath}</p>
      </div>
    );
  }
}

export default MovieCard;
