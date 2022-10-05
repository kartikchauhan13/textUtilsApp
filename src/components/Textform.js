import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
  return (
    <div>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-4"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="enter text here !"
          value={text}
          onChange={onChangeFunc}
        ></textarea>
        <button className="btn btn-primary" onClick={upper}>
          Uppercase
        </button>
      </div>
    </div>
  );
}
