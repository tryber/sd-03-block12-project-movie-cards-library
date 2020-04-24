import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div className="moviecard">
        <div>
          <img src={imagePath} alt={`${title} poster`} />
          <p> {title} </p>
          <p> {subtitle} </p>
          <p> {storyline} </p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
