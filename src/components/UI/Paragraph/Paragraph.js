import React from 'react';
import MyParagraph from './MyParagraph';

function Paragraph(props) {
  console.log('paragraph component');

  return <MyParagraph>{props.show ? 'This is a paragraph' : ' '}</MyParagraph>;
}

export default React.memo(Paragraph);
