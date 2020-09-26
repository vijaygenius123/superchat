import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import {firebaseConfig} from './firebaseConfig'
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

    const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
      </header>

        <section>
            {user ? <ChatRoom /> : <SignIn />}
        </section>
    </div>
  );
}

export default App;
