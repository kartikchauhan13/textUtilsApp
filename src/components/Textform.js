import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Textform.css';

export default function Textform(props) {
  const [text, setText] = useState('');
  function onChangeFunc(event) {
    setText(event.target.value);
  }

  function upper() {
    const newText = text.toUpperCase();
    setText(newText);
    console.log('text changed to upper case ');
  }
  function lower() {
    const newText = text.toLowerCase();
    setText(newText);
    console.log('text changed to lower case ');
  }
  function copyText() {
    navigator.clipboard.writeText(String(text));
    console.log(typeof text);
  }
  function clearText() {
    setText('');
    console.log('text cleared');
  }

  return (
    <>
      <div
        className="container my-3 "
        style={{ color: props.mode == 'light' ? 'black' : 'white' }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-4"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="enter text here !"
          value={text}
          onChange={onChangeFunc}
          style={{
            backgroundColor: props.mode == 'light' ? 'lightgreen' : '#4C6793',
            color: props.mode == 'light' ? 'black' : 'white',
          }}
        ></textarea>
        <div>
          <button className="btn btn-primary" onClick={upper}>
            Uppercase
          </button>
          <button className="btn btn-success mx-2" onClick={lower}>
            Lowercase
          </button>
          <button className="btn btn-secondary mx-1" onClick={copyText}>
            Copy to Clipboard
          </button>
          <button className="btn btn-danger mx-1" onClick={clearText}>
            Clear text
          </button>
        </div>
        <p className="my-2">
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{text.split(' ').length * 0.08} minutes read</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode == 'light' ? 'black' : 'white' }}
      >
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : 'Enter text above in box for the preview'}
        </p>
      </div>
    </>
  );
}
