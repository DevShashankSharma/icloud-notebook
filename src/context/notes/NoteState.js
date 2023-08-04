import React, { useState } from "react";
import NoteContext from "./noteContext";
//we can also write the noteContext in this file no need to import
// After importing NoteContext State for note  is made

const NoteState = (props) => {
  const host = "https://icloud-notebook-backend.vercel.app";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all Note
  const getNotes = async () => {
    //API call   ----> Search fetch using header
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        // "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //Add a Note
  const addNote = async (title, description, tag) => {
    //API call   ----> Search fetch using header
    const response = await fetch(`${host}/api/notes/addNotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    console.log("adding a note");
    console.log(note);
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //API call   ----> Search fetch using header
    const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting the Note with id : " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call   ----> Search fetch using header
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    setNotes(newNotes);
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        console.log("hello", element);
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
