import React from 'react';
import {Title, TitleSmall} from './style';

function App() {
  return (
    <div>
      <Title fontSize={12}>Hello Word
        <span>menor</span>
      </Title>
      <TitleSmall>testo maior</TitleSmall>
    </div>
  );
}

export default App;
