// implement Rating component here
import React from 'react';
import '../App.css';

class Rating extends React.Component {
  render() {
    return (
      <div>
        <p className="rating">{this.props.rating}</p>
      </div>

    );
  }
}

export default Rating;
