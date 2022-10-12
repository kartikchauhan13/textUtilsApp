import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function About(props){
  return (
    <>
      <div style={{color:props.mode=="light"?'black':'white'}}>
      <p>
        This is an application for analyzing the text , you can enter the text
        in box and do thse operations:
      </p>
      <ul>
        <li>Uppercase the text</li>
        <li>Lowercase the text</li>
        <li>Copy the text</li>
        <li>Clear the text</li>
      </ul>
      </div>
    </>
  );
}

