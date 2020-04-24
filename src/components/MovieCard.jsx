import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const styles = {
      article: {
        backgroundColor: 'whitesmoke',
        border: 'solid 2px black',
        borderRadius: '10%',
        display: 'flex',
        flexBasis: '41%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
        overflow: 'hidden',
      },
      img: { width: '100%' },
      h4: {
        backgroundColor: 'rgb( 171, 171, 171 )',
        fontSize: '1.5em',
        margin: 0,
        padding: 10,
      },
      h5: {
        fontSize: '1em',
        margin: 0,
        padding: 5,
      },
      p: {
        height: 100,
        padding: 5
      },
    };

    const movie = this.props.movie;
    return (
      <article style={styles.article}>
        <img src={movie.imagePath} alt={`cover of ${movie.title}`} style={styles.img} />
        <h4 style={styles.h4}>{movie.title}</h4>
        <h5 style={styles.h5}>{movie.subtitle}</h5>
        <p style={styles.p}>{movie.storyline}</p>
        <Rating rating={movie.rating} />
      </article>
    );
  }
}

export default MovieCard;
