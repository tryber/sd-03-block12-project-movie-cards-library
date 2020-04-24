// implement MovieCard component here
import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.cards;
    const movieLibCard = (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt="test" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
    return movieLibCard;
  }
}

// 6 Crie um componente chamado MovieCard
// Esse componente representa um cartão de filme.
// MovieCard deve receber uma prop movie. Essa prop será um objeto,
// contendo as propriedades,
// title, subtitle, storyline, imagePath e rating.

export default MovieCard;
