import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import {firebaseConfig} from './firebaseConfig'

firebase.initializeApp(firebaseConfig)


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
