import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Updated import for uuidv4
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };
  useEffect(() => {
    console.log("useEffecthook ran", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffecthook ran", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
