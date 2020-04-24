import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList'
import moviesData from './data';

function App() {
  return (
    <div className="App">
      <Header /><br />
      <MovieList movies={moviesData[0]}/>
    </div>
  );
}

export default App;
