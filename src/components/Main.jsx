import NoteInput from './NoteInput';
import NotesList from './NotesList';

const Main = ({notes, setNotes}) => {
    
    
    return (
        <div className="note-app__body">
            <NoteInput setNotes={setNotes} />
            <h2>Catatan Aktif</h2>
            <NotesList notes={notes.filter(note => note.archived == false)} setNotes={setNotes} />
            <h2>Arsip</h2>
            <NotesList notes={notes.filter(note => note.archived == true)} setNotes={setNotes} />
        </div>
    );
}

export default Main;