import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import {createContext} from 'react'

var firebaseConfig = {
    apiKey: "AIzaSyBKmqE2zWUtro4kYqyYsFMLREAjjcGq0fg",
    authDomain: "chatick-a39e6.firebaseapp.com",
    projectId: "chatick-a39e6",
    storageBucket: "chatick-a39e6.appspot.com",
    messagingSenderId: "781321853855",
    appId: "1:781321853855:web:d8b5995d243ef505a8bbaa",
    measurementId: "G-3L7EDZCTL0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export  const Context = createContext(null)
  const auth = firebase.auth()
  const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{firebase, auth, firestore}}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
