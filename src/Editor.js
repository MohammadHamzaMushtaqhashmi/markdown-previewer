import React from 'react';

const Editor = ({ markdown, handleChange }) => (
  <textarea
    id="editor"
    value={markdown}
    onChange={handleChange}
  />
);

export default Editor;
