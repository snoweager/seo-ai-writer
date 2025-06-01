import React from 'react'

function Step3_TopicSelector({ topics = [], onSelect }) {
  return (
    <div>
      <h2>Step 3: Topic Selector</h2>
      <ul className="list-group">
        {topics.length === 0 && <li className="list-group-item">No topics available.</li>}
        {topics.map((topic, idx) => (
          <li
            key={idx}
            className="list-group-item list-group-item-action"
            onClick={() => onSelect(topic)}
            style={{ cursor: 'pointer' }}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Step3_TopicSelector
