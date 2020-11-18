import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import InputArea from "./InputArea.jsx";

function App () {
  const [inputList, setInputList] = useState([]);

  function addItem (inputText) {
    setInputList((prevValue) => {
      return [...prevValue, inputText];
    })
  }

  function deleteNote(id) {
    setInputList(prevValue => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputArea addItem={addItem} />
           {inputList.map((noteItem, index) => {
             return (
               <Note
                 key={index}
                 id={index}
                 title={noteItem.title}
                 content={noteItem.content}
                 onDelete={deleteNote}
               />
             );
           })}
      <Footer />
    </div>
  )
}
export default App;
