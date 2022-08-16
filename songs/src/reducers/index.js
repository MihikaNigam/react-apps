//reducer class
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Violets for Roses", duration: "4:15" },
    { title: "Black Velvet", duration: "4:47" },
    { title: "Angels Like You", duration: "3:15" },
    { title: "Edge of Seventeen", duration: "5:29" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
