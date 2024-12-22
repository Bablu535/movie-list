import React, { useState } from 'react';

function MovieForm({ addMovie }) {
  const [name, setName] = useState('');
  const [actors, setActors] = useState('');
  const [directors, setDirectors] = useState('');
  const [musicArtists, setMusicArtists] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      name,
      actors: actors.split(',').map((actor) => actor.trim()),
      directors: directors.split(',').map((director) => director.trim()),
      musicArtists: musicArtists.split(',').map((artist) => artist.trim()),
      imageUrl,
    };
    addMovie(movie);
    setName('');
    setActors('');
    setDirectors('');
    setMusicArtists('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Add Movie</h1>
      <input
        type="text"
        placeholder="Movie Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Actors"
        value={actors}
        onChange={(e) => setActors(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Directors"
        value={directors}
        onChange={(e) => setDirectors(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Music Artists"
        value={musicArtists}
        onChange={(e) => setMusicArtists(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
