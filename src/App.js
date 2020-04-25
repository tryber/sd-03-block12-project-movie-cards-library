import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import movie from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movie}/>
    </div>
  );
}

export default App;
