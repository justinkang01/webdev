import Song from "./Song";
import {useState, ChangeEvent} from "react";

type Prop = {
  readonly title: string,
  readonly artist: string
}

const Playlist = ({title, artist}: Prop) => {
  const [songs, addSong] = useState([]);
  // const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
  //   const song = event.currentTarget.value;
  //   addSong(songs.append(song))


  return(
    <div>
      <input
      type="text"
      placeholder="Enter Song title here"
      />
      <input
      type="text"
      placeholder="Enter Artist here"
      />
      {/* <button onClick={() => addSong()}>Add Song to my playlist!</button> */}
    </div>
  );

}

export default Playlist