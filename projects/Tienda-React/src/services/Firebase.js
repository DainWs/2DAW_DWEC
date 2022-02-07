import { initializeApp } from 'firebase/app';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDhmSXBLfGy6C_koJWKC1Na4nKZDseed1Q",
  authDomain: "chinospaco-tienda-react.firebaseapp.com",
  projectId: "chinospaco-tienda-react",
  storageBucket: "chinospaco-tienda-react.appspot.com",
  messagingSenderId: "225912283025",
  appId: "1:225912283025:web:d8927e7b1fa15f0bf78430"
};

const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);

export {FIREBASE_CONFIG, FIREBASE_APP}