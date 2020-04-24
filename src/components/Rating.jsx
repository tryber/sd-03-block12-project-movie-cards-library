// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    // const { rating: { rating } } = this.props;
    const rating = this.props.rating;
    return (
      <div className="moviecardrating">
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

export default Rating;
