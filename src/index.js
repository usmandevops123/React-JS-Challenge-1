import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //It is impossible to render without div or array for multiple jsx.
  <> 
  <h1>Netflix top picker </h1>
  <p>Here are the top Netflix shows.</p> 
  <ol>
    <li>Demon Slayer</li>
    <li>Night Stalker: The Hunt for a Serial Killer</li>
    <li>Cocomelon</li>
    <li>Henry Danger</li>
    <li>Jenni Rivera: Mariposa de Barrio</li>
  </ol>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
