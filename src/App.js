import React, { useContext } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import { MoviesContext } from './MoviesContext'; // Import MoviesContext
import './App.css';
import './Navbar.css';

function App() {
  // Use the context to get movies and addMovie function
  const { movies, addMovie } = useContext(MoviesContext);

  return (
    <div className="App">
      <h1>Movie List</h1>
      
      <MovieList movies={movies} />      {/* Pass movies to MovieList */}
      <MovieForm addMovie={addMovie} />  {/* Pass addMovie to MovieForm */}
    </div>
  );
}

export default App;
