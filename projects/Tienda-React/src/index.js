import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBbmF2oI-nXnKS4-zMGc5VtaTU_GwIES2E",
  authDomain: "fir-example-ce204.firebaseapp.com",
  projectId: "fir-example-ce204",
  storageBucket: "fir-example-ce204.appspot.com",
  messagingSenderId: "647796472851",
  appId: "1:647796472851:web:ed2044ac883ebb43fa93e6"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
