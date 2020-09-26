import React from "react";
import ChatMessage from './ChatMessage';
import {firestore} from "../firebaseConfig";
import {useCollectionData} from "react-firebase-hooks/firestore";

// @ts-ignore
function ChatRoom(){

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    return(
       <>
       <div>
           {messages && messages.map((msg: any) => <ChatMessage key={msg.id} message={msg} />)}
       </div>
       </>
    )

}

export default ChatRoom;
