// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard'

class MovieList extends React.Component {
    render() {
        const movies = this.props.movies
        return <div className='movie-list'>
            {movies.map(movie => {
                const { title, subtitle, storyline, rating, imagePath } = movie
                return (<MovieCard className='movie-card' title={title} subtitle={subtitle} storyline={storyline} rating={rating} imagePath={imagePath} key={title}/>)
            })}
        </div>
    }
}

export default MovieList