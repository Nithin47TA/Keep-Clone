import React, { useState } from "react";

function CreateArea(props) {
  let [title, setTitle] = useState("");
  let [textArea, setTextArea] = useState("");

  return (
    <div>
      <form>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          type="button"
          onClick={() => {
            props.setNote((prevNote) => [...prevNote, { "title": title, "content": textArea }]);
            setTextArea("");
            setTitle("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
