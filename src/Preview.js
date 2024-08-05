import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{ __html: marked(markdown) }}
  />
);

export default Preview;
