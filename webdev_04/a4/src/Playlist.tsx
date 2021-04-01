import Song from "./Song";
import { useState, ChangeEvent } from "react";

type SongInfo = {
  readonly title: string;
  readonly artist: string;
};

const Playlist = () => {
  const [songs, addSong] = useState<SongInfo[]>([]);

  const handleChange = (event) => {
    { [event.target.name] : event.target.value };
  };

  const handleSubmit = () => {
    addSong([...songs, song]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Song title:
          <input
            type="text"
            name="title"
            onChange={handleChange}
          />
        </label>
        <label>
          Enter Song Artist:
          <input
            type="text"
            name="artist"
            onChange={handleChange}
          />
        </label>
        <button>Add song to playlist</button>
      </form>
      <div>
        {songs.map((song) => (
          <Song key={song.title} {...song} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
