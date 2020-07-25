import firebase from 'firebase';

const config = { // Copied from firebase web app settings
  apiKey: "AIzaSyAQiNl8OWKtx7DtbDDWAMEOZrLSfrjypbk",
  authDomain: "reactjs-auth-84259.firebaseapp.com",
  databaseURL: "https://reactjs-auth-84259.firebaseio.com",
  projectId: "reactjs-auth-84259",
  storageBucket: "reactjs-auth-84259.appspot.com",
  messagingSenderId: "888834752362",
  appId: "1:888834752362:web:5e3898fe5d4edd92336f13",
  measurementId: "G-EVKZMMD7JW"
};

const fire = firebase.initializeApp(config);
export default fire;
