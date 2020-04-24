import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <img src={this.imagePath}/>
    );
  }
}

export default MovieCard;
