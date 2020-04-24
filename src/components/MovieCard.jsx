// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div> 
        <img src={this.props.movie.imagePath} alt="Movie card" />
      </div>
    );
  }
}

export default MovieCard;
