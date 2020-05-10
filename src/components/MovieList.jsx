// implement MovieList component here
import React from 'react';

export default class MovieList extends React.Component {
  render() {
    const { 
      title,
      subtitle,
      storyline,
      rating,
      imagePath } = this.props;
    return (
      <div>
        <p>
          {title} <br/>
          {subtitle} <br/>
          {storyline} <br/>
          {rating}
        </p>
        <img src={imagePath} alt={title}/>
      </div>
    );
  }
}
