import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import Link from './components/link';

function App() {

  const [content, setContent] = useState('profile');
  const [animate, setAnimate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(animate => 0);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  let arr = [
    'profile',
    'education',
    'experience'
  ];

  let linkLoop = arr.map((val, idx) => {
    return <Link 
              key={idx}
              name={val}
              click={() => {
                setContent(val);
                setAnimate(1);
              }}/>
  });
  return (
    <div className="container">
      <Header>
        {linkLoop}
      </Header>
      <Body 
        content={content}
        anim={animate}/>
    </div>
  );
}

export default App;
