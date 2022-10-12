import React, { useState } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

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
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggle} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter your text to Analyse below"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
