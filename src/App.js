import React from 'react';
import './App.css';
import movies from './data.js';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      {/* Exemplo de comentário */}
      <Header />
      <MovieList filmes={movies}/>
    </div>
  );
}

export default App;
