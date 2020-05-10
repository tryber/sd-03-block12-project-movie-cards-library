import React from 'react';
import './App.css';
import data from './data'
import Header from './components/Header';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieCard movies={data} />
    </div>
  );
}

export default App;
