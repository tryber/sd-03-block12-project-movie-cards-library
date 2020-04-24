import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={MovieCard} />
    </div>
  );
}

export default App;
