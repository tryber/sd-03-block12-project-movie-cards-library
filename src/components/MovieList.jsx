// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((element) => <MovieCard key={element.title} movie={element} />)}
      </div>
    );
  }
}

export default MovieList;
