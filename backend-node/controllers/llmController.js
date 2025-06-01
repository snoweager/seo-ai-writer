// backend-node/controllers/llmController.js
const axios = require("axios");

let sessionData = {}; // temp in-memory store

exports.getKeywords = async (req, res) => {
  const { seedKeyword } = req.body;
  if (!seedKeyword) return res.status(400).json({ error: "Missing seedKeyword" });

  try {
    const response = await axios.post("http://localhost:8000/keyword-suggestions", {
      seed_keyword: seedKeyword,
    });

    sessionData.keyword = seedKeyword;
    sessionData.keywords = response.data.keywords;

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Keyword generation failed" });
  }
};

exports.getTitles = async (req, res) => {
  const { keyword } = req.body;
  if (!keyword) return res.status(400).json({ error: "Missing keyword" });

  try {
    const response = await axios.post("http://localhost:8000/title-suggestions", {
      keyword,
    });

    sessionData.selectedKeyword = keyword;
    sessionData.titles = response.data.titles;

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Title generation failed" });
  }
};

exports.getTopics = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Missing title" });

  try {
    const response = await axios.post("http://localhost:8000/topic-suggestions", {
      title,
    });

    sessionData.selectedTitle = title;
    sessionData.topics = response.data.topics;

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Topic generation failed" });
  }
};

exports.getContent = async (req, res) => {
  const { topic, keyword } = req.body;
  if (!topic || !keyword) return res.status(400).json({ error: "Missing topic or keyword" });

  try {
    const response = await axios.post("http://localhost:8000/content-generation", {
      topic,
      keyword,
    });

    sessionData.selectedTopic = topic;
    sessionData.generatedContent = response.data.content;

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Content generation failed" });
  }
};
