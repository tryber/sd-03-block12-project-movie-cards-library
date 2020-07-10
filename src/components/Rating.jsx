// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating"> 
        <p>Nota:</p> 
        <p className="rating">
          {this.props.rating}
        </p>
      </div>
    );
  }
}

export default Rating;
