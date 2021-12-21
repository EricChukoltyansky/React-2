import axios from "axios";

const KEY = "AIzaSyDJReN7BZweOMyPDqs0sv4DWSVidB6CpPE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
