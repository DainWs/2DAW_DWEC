import { initializeApp } from 'firebase/app';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBbmF2oI-nXnKS4-zMGc5VtaTU_GwIES2E",
  authDomain: "fir-example-ce204.firebaseapp.com",
  projectId: "fir-example-ce204",
  storageBucket: "fir-example-ce204.appspot.com",
  messagingSenderId: "647796472851",
  appId: "1:647796472851:web:ed2044ac883ebb43fa93e6"
};

const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);

export {FIREBASE_CONFIG, FIREBASE_APP}