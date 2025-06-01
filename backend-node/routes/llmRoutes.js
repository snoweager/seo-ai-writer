// backend-node/routes/llmRoutes.js
const express = require("express");
const router = express.Router();
const {
  getKeywords,
  getTitles,
  getTopics,
  getContent,
} = require("../controllers/llmController");

router.post("/keywords", getKeywords);
router.post("/titles", getTitles);
router.post("/topics", getTopics);
router.post("/content", getContent);

module.exports = router;
