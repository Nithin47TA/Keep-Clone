import React, { useState } from "react";
import NavBar from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
// import notes from "./data/notes";
import CreateArea from "./Components/CreateArea";
export default function App() {
  let [notes, setNote] = useState([]);
  function removeNote(index){
   
    setNote(notes.filter((note,id) =>id !== index))
  }
  return (
    <div>
      <NavBar />
      <CreateArea setNote={setNote} />
      {notes.map((note, i) => (
        <Note
          key={i}
          removeNote={removeNote}
          id={i}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
}
