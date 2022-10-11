import React, { useState } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

export default function App() {
  const [mode, setMode] = useState('light');

  function toggle() {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'slategray';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggle} />
      <Textform heading="Enter text to Analyze : " mode={mode} />
    </>
  );
}
