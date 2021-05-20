import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import Paragraph from './components/UI/Paragraph/Paragraph';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('app component');

  const toggleParagraph = useCallback(() => {
    setShowParagraph((input) => !input);
  }, []);

  return (
    <div className="app">
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
      <Paragraph show={false} />
      <h1>Hi there!</h1>
    </div>
  );
}

export default App;
