import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import moviesData from './data';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <MovieList movies={moviesData} />
      </div>
    </div>
  );
}

export default App;
