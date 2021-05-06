import React from 'react';
import Profile from './components/profile';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';
import Hobby from './components/award';
import Footer from './components/footer';
function App(props) {
  return (
    <div className="container">
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Hobby />
      <Footer />
    </div>
  );
}

export default App;
