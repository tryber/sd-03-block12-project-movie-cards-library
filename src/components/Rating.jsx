// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <footer className="movie-card-rating">
        <span className="rating">{rating}</span>
      </footer>
    );
  }
}

export default Rating;
