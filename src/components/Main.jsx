import NoteInput from './NoteInput';
import NotesList from './NotesList';

const Main = () => {
    return (
        <div className="note-app__body">
            <NoteInput />
            <h2>Catatan Aktif</h2>
            <NotesList />
            <h2>Arsip</h2>
            <NotesList />
        </div>
    );
}

export default Main;