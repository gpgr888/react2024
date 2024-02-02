
// this is the fist file that loads usually this files remains clean 
import React from 'react';
import ReactDOM from 'react-dom/client';
//basic import from react library to start with
//import app.js here as we had worked here mainly
import App from './App';

//create a root element this is were all it comes to 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strictmode for standard
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

