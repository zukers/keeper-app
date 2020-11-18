import React, { useState } from "react";


function InputArea (props) {
 const [input, setInput] = useState({
   title: "",
   content: ""
 });

  function handleChange(event) {
    let {name, value} = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.addItem(input);
    setInput({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
    <form>
      <input
        name="title"
        onChange={handleChange}
        value={input.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={input.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button onClick={submitNote}>Add</button>
    </form>
  </div>
);
}


export default InputArea;
