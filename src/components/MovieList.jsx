import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {

  render(){

    const movies = this.props.movieList;

    return (
      <div className="movie-list">
        { movies.map((element) => <MovieCard key={element.title} movieCards={element} />) }
      </div>
    );

  }
}

export default MovieList;
