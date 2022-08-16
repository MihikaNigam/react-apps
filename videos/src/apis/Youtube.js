import axios from "axios";
const KEY = "AIzaSyBcqymrB_nivyVCohyU0lgcXMmDcKzZaCk";
//default method to create axios object
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
   // type: "video",
  },
});
