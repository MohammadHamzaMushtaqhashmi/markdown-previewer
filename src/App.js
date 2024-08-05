import React, { useState } from 'react';
import {marked} from 'marked';
import './App.css'; // Ensure you have styles for the headers

const App = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer

## This is a subheading

- List item 1
- List item 2

**Bold text**

[Link](https://example.com)

\`Inline code\`

\`\`\`
Code block
\`\`\`

> Blockquote

![Image](https://via.placeholder.com/150)
  `);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          rows="10"
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default App;
