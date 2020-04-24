import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <img src={movie.imagePath} alt="Cartaz do Filme"/>
    );
  }
}

export default MovieCard;
