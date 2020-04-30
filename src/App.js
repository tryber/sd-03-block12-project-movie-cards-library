import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
