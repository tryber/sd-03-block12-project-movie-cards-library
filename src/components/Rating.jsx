// implement Rating component here
import React from 'react';

export default class Rating extends React.Component {
  render() {
    const movieRating = this.props.rating;
    return (
      <p className="rating" >{movieRating}</p>
    );
  }
}
