import React from 'react'

function Step4_ContentCreator({ content, onGenerate, onCopy, onDownload }) {
  return (
    <div>
      <h2>Step 4: Content Creator</h2>
      <button className="btn btn-primary mb-3" onClick={onGenerate}>
        Generate Content
      </button>
      <div className="form-control mb-3" style={{ minHeight: '150px' }}>
        {content || 'Generated content will appear here.'}
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary" onClick={onCopy}>Copy to Clipboard</button>
        <button className="btn btn-outline-success" onClick={onDownload}>Download .txt</button>
      </div>
    </div>
  )
}

export default Step4_ContentCreator
