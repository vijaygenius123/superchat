import React from 'react';
import './App.css';

import {auth} from './firebaseConfig';

import {useAuthState} from "react-firebase-hooks/auth";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";


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
