import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    /**
     * Challenge:
     * 1. Every time the `notes` array changes, save it 
     *    in localStorage. You'll need to use JSON.stringify()
     *    to turn the array into a string to save in localStorage.
     * 2. When the app first loads, initialize the notes state
     *    with the notes saved in localStorage. You'll need to
     *    use JSON.parse() to turn the stringified array back
     *    into a real JS array.
     */
    // Accessing localStorage Data (if localStorage empty, default state value of notes should be an empty array)
    // Adding an arrow function would "lazily" initialize the notes state
    // The point of lazy loading is to prevent loading the notes states
    // If its not being directly edited (e.g when App component rerenders when
    // we are making changes that is not directly tied to notes state itself)
    const [notes, setNotes] = React.useState(
        () => {return JSON.parse(localStorage.getItem("notes"))|| []})
    
    // console.log(notes.body);
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    // Proper use of localStorage because localStorage is a side effect (not within the realm of react)
    React.useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }


    /**
    * Challenge: 
    * When the user edits a note, reposition
    * it in the list of notes to the top of the list
    */
    
    function updateNote(text) {
        // No rearrange feature
        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { ...oldNote, body: text }
        //         : oldNote
        // }))

        // With rearrange feature
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++){
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId){
                    newArray.unshift({...oldNote, body:text})
                }else{
                    newArray.push(oldNote)
                }
            }

            return newArray;
        });
    }


    /**
     * Challenge: complete and implement the deleteNote function
     * 
     * Hints: 
     * 1. What array method can be used to return a new
     *    array that has filtered out an item based 
     *    on a condition?
     * 2. Notice the parameters being based to the function
     *    and think about how both of those parameters
     *    can be passed in during the onClick event handler
     */

    function deleteNote(noteId) {
        console.log(noteId)
        // event.stopPropagation();
        // Your code here
        setNotes(oldNotes => {
            return oldNotes.filter(note => note.id !== noteId.id)
        })
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    handleClick={()=>deleteNote(findCurrentNote())}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
