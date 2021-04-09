import Song from "./Song";
import { useState, ChangeEvent } from "react";

type SongInfo = {
  readonly title: string;
  readonly artist: string;
};

const Playlist = () => {
  const [songs, addSong] = useState<SongInfo[]>([]);

  let temp = { title: "", artist: "" };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.name === "title") {
      temp.title = event.target.value;
    } else if (event.target.name === "artist") {
      temp.artist = event.target.value;
    }
  };

  const handleSubmit = () => {
    addSong([...songs, temp]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Song title:
          <input type="text" name="title" onChange={handleChange} />
        </label>
        <label>
          Enter Song Artist:
          <input type="text" name="artist" onChange={handleChange} />
        </label>
        <button>Add song to playlist</button>
      </form>
      <div>
        {songs.map((song) => (
          <Song key={song.title} {...song} />
        ))}
      </div>
    </>
  );
};

export default Playlist;
