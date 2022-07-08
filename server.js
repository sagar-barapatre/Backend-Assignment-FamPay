require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const { getYTVideos } = require("./youtube/youtubeApi");
const videoRoutes = require("./routes/videosRoutes");

const app = express();
app.use(express.json());

// For visualizing api requests in dev mode
app.use(morgan("tiny"));

//CORS Policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//Video routes
app.use("/videos", videoRoutes);

//Fetching Youtube API , every 10 secs
setInterval(getYTVideos, 10000);

//Setting up database and backend Server
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("MongoDB connected!);
      console.log(`Local -> http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
