import React, { useState } from "react";
import {
  fetchKeywords,
  fetchTitles,
  fetchTopics,
  fetchContent,
} from "./api";

function App() {
  const [step, setStep] = useState(1);
  const [seedKeyword, setSeedKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeywordSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetchKeywords(seedKeyword);
      setKeywords(res.data.keywords || []);
      setStep(2);
    } catch (err) {
      console.error("Keyword error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleTitleSubmit = async (keyword) => {
    setLoading(true);
    try {
      const res = await fetchTitles(keyword);
      setTitles(res.data.titles || []);
      setStep(3);
    } catch (err) {
      console.error("Title error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleTopicSubmit = async (title) => {
    setLoading(true);
    try {
      const res = await fetchTopics(title);
      setTopics(res.data.topics || []);
      setStep(4);
    } catch (err) {
      console.error("Topic error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleContentSubmit = async (topic) => {
    setLoading(true);
    try {
      const res = await fetchContent(topic, selectedKeyword);
      setContent(res.data.content || "");
      setStep(5);
    } catch (err) {
      console.error("Content error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 AI Content Writer</h1>

      {step === 1 && (
        <div className="space-y-2">
          <input
            type="text"
            className="border px-3 py-2 w-full"
            value={seedKeyword}
            onChange={(e) => setSeedKeyword(e.target.value)}
            placeholder="Enter seed keyword..."
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleKeywordSubmit}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Keywords"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <h2 className="font-semibold">Select a keyword:</h2>
          {keywords.map((k) => (
            <button
              key={k}
              className="block bg-gray-200 px-3 py-2 my-1 rounded w-full text-left"
              onClick={() => {
                setSelectedKeyword(k);
                handleTitleSubmit(k);
              }}
            >
              {k}
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2">
          <h2 className="font-semibold">Select a title:</h2>
          {titles.map((t) => (
            <button
              key={t}
              className="block bg-gray-200 px-3 py-2 my-1 rounded w-full text-left"
              onClick={() => {
                setSelectedTitle(t);
                handleTopicSubmit(t);
              }}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {step === 4 && (
        <div className="space-y-2">
          <h2 className="font-semibold">Select a topic:</h2>
          {topics.map((t) => (
            <button
              key={t}
              className="block bg-gray-200 px-3 py-2 my-1 rounded w-full text-left"
              onClick={() => {
                setSelectedTopic(t);
                handleContentSubmit(t);
              }}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {step === 5 && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Generated Content:</h2>
          {loading ? (
            <p>Loading content...</p>
          ) : (
            <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
              {content}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
