// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movies;
    return (
      <div>
        <p>Title: {title}</p>
        <p>Subtitle: {subtitle}</p>
        <p>Storyline: {storyline}</p>
        <img src={imagePath} alt={title} />
      </div>
    );
  }
}

export default MovieCard;
