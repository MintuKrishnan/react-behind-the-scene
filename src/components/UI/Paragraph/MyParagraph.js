import React from 'react';

function MyParagraph(props) {
  console.log('my paragraph');
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
}

export default MyParagraph;
