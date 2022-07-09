const { Router } = require("express");
const router = Router();

const videosController = require("../controllers/videosController");

router.get("/getvideos", videosController.getVideos);
router.post("/searchvideos", videosController.searchVideos);

module.exports = router;
