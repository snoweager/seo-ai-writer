import axios from "axios";

const API_BASE = "http://localhost:3000/api"; // Node backend

export const fetchKeywords = (seed) =>
  axios.post(`${API_BASE}/keywords`, { seed_keyword: seed });

export const fetchTitles = (keyword) =>
  axios.post(`${API_BASE}/titles`, { keyword });

export const fetchTopics = (title) =>
  axios.post(`${API_BASE}/topics`, { title });

export const fetchContent = (topic, keyword) =>
  axios.post(`${API_BASE}/content`, { topic, keyword });
