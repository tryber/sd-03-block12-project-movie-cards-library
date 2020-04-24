import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
	render() {
		const arrayOfObjects = this.props.movies;
		return (
			<ul className = "movie-list">
				{arrayOfObjects.map((item) => <MovieCard key = {item.title} movie = {item} />)}
			</ul>
		);
	}
}

export default MovieList;
