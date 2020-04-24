// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import dataMovies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {dataMovies.map((element) => (
          <MovieCard
            key={element.title}
            movie={{
              title: element.title,
              subtitle: element.subtitle,
              storyline: element.storyline,
              imagePath: element.imagePath,
              rating: element.rating,
            }}
          />
        ))}

      </div>
    );
  }
}

export default MovieList;
