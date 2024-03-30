import React ,{useState} from "react";
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from "./CreateArea";


function App() {

  const [notes,setNotes]=useState([]);


  function addNote(note){
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
    }

  function deleteNote(id){
   setNotes(prevNotes =>{
   return prevNotes.filter((note,index) => {
            return id !==index ;
    }
   )})
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.length > 0 ? 
  notes.map((note, index) => (
    <Note key={index} id={index} title={note.title} onDelete={deleteNote} content={note.content} />
  ))
  : null}
      <Footer />
    </div>
  );
}
export default App;