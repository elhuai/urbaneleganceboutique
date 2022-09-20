import React from 'react';

function TextSection({ post }) {
  return (
    <>
      <div className="article_section">{post[0].content}</div>
    </>
  );
}

export default TextSection;
