import React from 'react';

class MovieCard extends React.Component {
  render() {
    // const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie">
        {this.props.movie};
      </div>
    );
  }
}

export default MovieCard;
