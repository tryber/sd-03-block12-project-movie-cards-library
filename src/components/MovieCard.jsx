// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath } = this.props.movie;
    return (
      <div><img src={imagePath} alt="Ow" /></div>
    );
  }
}

export default MovieCard;
