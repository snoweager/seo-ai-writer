// Step2_TitleGenerator.jsx
import React from 'react'

function Step2({ suggestions, onSelect }) {
  return (
    <div>
      <h2>Select a Title</h2>
      <ul>
        {suggestions.map((title, i) => (
          <li key={i} onClick={() => onSelect(title)} style={{ cursor: 'pointer', margin: '10px 0' }}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Step2
