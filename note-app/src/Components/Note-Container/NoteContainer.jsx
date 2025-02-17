import Note from "../Note/Note";
import './NoteContainer.css';

function NoteContainer(props)  {
      const reverseArray = (arr) => {
            const array = [];
            for(let i=arr.length - 1; i>=0; --i){
                  array.push(arr[i]);
            }
            return array;
      };

      const notes = reverseArray(props.notes);
  return (
    <div className="note_container">
      <h2>Notes</h2>
      <div className="note-container-notes custom-scroll">
      {notes?.length > 0 ? (
      notes.map((item) => <Note key={item.id} note={item} 
      deleteNote = {props.deleteNote}
      updateText = {props.updateText}
      />)
      )
      : ( <h3>No Notes Present</h3>
)}
     </div>
    </div>
  );
}

export default NoteContainer
