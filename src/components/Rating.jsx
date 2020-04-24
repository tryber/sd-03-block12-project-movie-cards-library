import React from 'react';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div calssName="rating">
        <p>{rating}</p>
      </div>
    );
  }
}

export default Rating;
