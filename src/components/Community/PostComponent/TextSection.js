import React from 'react';
import parse from 'html-react-parser';

function TextSection({ post }) {
  return (
    <>
      <div className="article_section">{parse(post[0].content)}</div>
    </>
  );
}

export default TextSection;
