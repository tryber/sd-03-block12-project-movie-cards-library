import React from 'react';

class Rating extends React.Component {
  render() {
    const { rate } = this.props;

    return (
      <div className="rating">
        <p className="movie-card-rating">{rate}</p>
      </div>
    );
  }
}

export default Rating;
