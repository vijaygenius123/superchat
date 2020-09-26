import React from "react";

function ChatMessage(props: any){

    // @ts-ignore
    const {text} = props.message;


    return(
       <p>{text}</p>
    )

}

export default ChatMessage;
