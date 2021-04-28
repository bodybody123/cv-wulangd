import React, { useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import Link from './components/link';

function App() {

  const [content, setContent] = useState('profile');

  return (
    <div className="container">
      <Header>
        <Link 
          name="Profile"
          click={() => setContent('profile')}/>
        <Link 
          name="Education"
          click={() => setContent('education')}/>
        <Link 
          name="Experience"
          click={() => setContent('experience')}/>
      </Header>
      <Body 
        content={content}/>
    </div>
  );
}

export default App;
