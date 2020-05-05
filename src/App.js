import React from 'react';
import './App.css';
import movie from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header />
      <MovieList movies={movie} />
    </div>
  );
}

export default App;
