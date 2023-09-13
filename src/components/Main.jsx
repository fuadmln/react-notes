import NoteInput from './NoteInput';
import NotesList from './NotesList';
import {getInitialData} from '../utils';
import { useState } from "react";

const Main = () => {
    const [notes, setNotes] = useState(() => getInitialData());
    
    return (
        <div className="note-app__body">
            <NoteInput setNotes={setNotes} />
            <h2>Catatan Aktif</h2>
            <NotesList notes={notes.filter(note => note.archived == false)}/>
            <h2>Arsip</h2>
            <NotesList notes={notes.filter(note => note.archived == true)}/>
        </div>
    );
}

export default Main;