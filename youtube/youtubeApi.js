const axios = require("axios").default;

const { QUERIES, BASE_URL } = require("./youtubeUtils");
const Videos = require("../models/Videos");

var { API_KEYS } = require("./youtubeUtils");

const rotateArray = () => {
  API_KEYS.unshift(API_KEYS.pop());
};
module.exports.getYTVideos = async () => {
  const query = QUERIES[Math.floor(Math.random() * QUERIES?.length)];

  const URL = `${BASE_URL}/search?key=${API_KEYS[0]}&type=video&part=snippet&q=${query}`;
  try {
    const res = await axios.get(URL);
    const vids = res?.data?.items;
    if (!vids) return;
    const allVideos = [];
    vids.forEach((vid) => {
      const video = {};
      video["videoId"] = vid?.id?.videoId;
      video["title"] = vid?.snippet?.title;
      video["description"] = vid?.snippet?.description;
      video["channelTitle"] = vid?.snippet?.channelTitle;
      video["publishTime"] = vid?.snippet?.publishTime;
      video["thumbnail"] = vid?.snippet?.thumbnails?.high?.url;
      allVideos.push(video);
    });
    await Videos.insertMany(allVideos);
  } catch (error) {
    if (error?.response?.status == 403) {
      rotateArray();
    } else console.log(error);
  }
};
