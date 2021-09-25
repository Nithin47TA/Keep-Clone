import React from "react";


export default function Note(props){

function removeNote(){
props.removeNote(props.id);

}
return(
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={removeNote}>
            Delete
        </button>
    </div>
);

}