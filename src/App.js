import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

export default function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <Textform heading="Enter text to Analyze : " />
    </>
  );
}
