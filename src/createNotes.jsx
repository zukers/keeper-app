import React from "react";
import Note from "./Note.jsx";


function createNotes (noteItem) {
  return (
    <Note
      key= {noteItem.key}
      title= {noteItem.title}
      content= {noteItem.content}
     />
  )
}
export default createNotes;
