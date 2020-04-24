// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <span className="movie-card-rating">
        <p className="rating">
          {rating}
        </p>
      </span>
    );
  }
}

export default Rating;
