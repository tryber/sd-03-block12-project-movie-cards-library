import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieData from './data';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
  const movies = MovieData;
  return (
    <div className="App">
      <Header />
      <MovieList movies={MovieData} />
    </div>
  );
};
}

export default App;
