// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render () {
    const { imagePath } = this.props.movie;
    return (
      <div><img src={imagePath} alt="Ow"></img></div>
    );
  }
}

export default MovieCard;