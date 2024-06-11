import NoteContainer from "./Components/Note-Container/NoteContainer";
import './App.css';
import SideBar from "./Components/Side-bar/SideBar";
import { useEffect, useState } from "react";


function App  ()  {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('note-app')) || []);


  const addNote = (color)=>{
        const tempNotes = [...notes];

        tempNotes.push({
          id:Date.now() + "" + Math.floor(Math.random() * 78),
          text:"",
          time: Date.now(),
          color,
        });
        setNotes(tempNotes);
  };


  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };


  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;


    tempNotes[index].text = text;
    setNotes(tempNotes);

  };


  useEffect(() =>{
         localStorage.setItem('note-app' , JSON.stringify(notes))
  }, [notes])

  return (

    <div className="App">
      <SideBar addNote={addNote} />
     <NoteContainer  notes={notes}
     deleteNote = {deleteNote}
     updateText = {updateText}/>
     
    </div>
  )
}

export default App
