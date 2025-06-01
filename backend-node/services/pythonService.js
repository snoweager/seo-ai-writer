// backend-node/services/pythonService.js
import axios from 'axios';

export const generateKeywordsFromPython = async (seedKeyword) => {
  try {
    const response = await axios.post('http://localhost:8000/generate-keywords', {
      seed_keyword: seedKeyword
    });
    return response.data.keywords;
  } catch (err) {
    console.error("Python service error:", err.message);
    throw err;
  }
};
