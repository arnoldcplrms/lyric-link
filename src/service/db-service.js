import Localbase from "localbase";
let db;

if (!db) {
  db = new Localbase("lyric-link-db");
}

export const addSongToDb = (songToQueue) => {
  return db.collection("songs").add(songToQueue);
};

export const fetchSongsFromDb = () => {
  return db.collection("songs").get();
};

export const deleteSongFromDb = (videoId) => {
  try {
    db.collection("songs").doc({ videoId }).delete();
  } catch (error) {
    return false
  }
};
