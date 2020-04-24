import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <div className='movie-card-header'>
        <Header />
      </div>
      <div clasName='movie-list'>
        <MovieList movie={MovieCard} />
      </div>
    </div>
  );
}

export default App;
