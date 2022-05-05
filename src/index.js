import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import "./Fonts/29LT Bukra Black.otf"
import "./Fonts/29LT Bukra Bold.otf"
import "./Fonts/29LT Bukra Light.otf"
import "./Fonts/29LT Bukra Medium.otf"
import "./Fonts/29LT Bukra Regular.otf"




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> <App /> </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
