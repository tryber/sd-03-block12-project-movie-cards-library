import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const styles = {
      article: {
        border: 'solid 2px black',
        borderRadius: '10%',
        display: 'flex',
        flexBasis: '36%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
        overflow: 'hidden',
      },
      img: { width: '100%' },
    };

    const movie = this.props.movie;
    return (
      <article style={styles.article}>
        <img src={movie.imagePath} alt={`cover of ${movie.title}`} style={styles.img} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
      </article>
    );
  }
}

export default MovieCard;
