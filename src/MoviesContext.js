import React, { createContext, useState } from 'react';

// Create the context
export const MoviesContext = createContext();

// Provider Component
export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie }}>
      {children}
    </MoviesContext.Provider>
  );
}
export default MoviesContext;