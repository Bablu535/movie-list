import React from 'react';

function Movie({ movie }) {
  return (
    <center><div className="card">
        
      <h3>{movie.name}</h3>
      <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
      <p><strong>Directors:</strong> {movie.directors.join(', ')}</p>
      <p><strong>Music Artists:</strong> {movie.musicArtists.join(', ')}</p>
    </div></center>
  );
}

export default Movie;
