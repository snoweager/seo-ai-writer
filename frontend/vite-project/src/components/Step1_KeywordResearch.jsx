import React from 'react'

function Step1_KeywordResearch({ keyword, setKeyword, onSubmit }) {
  return (
    <div>
      <h2>Step 1: Keyword Research</h2>
      <div className="mb-3">
        <label className="form-label">Enter Seed Keyword</label>
        <input
          type="text"
          className="form-control"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="e.g., digital marketing"
        />
      </div>
      <button className="btn btn-success" onClick={onSubmit}>
        Generate Keywords
      </button>
    </div>
  )
}

export default Step1_KeywordResearch
