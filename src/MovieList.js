import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.imageUrl} alt={movie.name} className="movie-image" />
          <div className="movie-title">{movie.name}</div>
          <div className="movie-details">
            <p>Actors: {movie.actors.join(', ')}</p>
            <p>Directors: {movie.directors.join(', ')}</p>
            <p>Music Artists: {movie.musicArtists.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
