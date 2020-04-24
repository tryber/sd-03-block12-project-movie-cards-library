import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieData from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={MovieData} />
    </div>
  );
}

export default App;
