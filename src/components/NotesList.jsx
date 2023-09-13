import Note from "./Note";

const NotesList = ({notes}) => {
    return (
        <>
            {(notes.length != 0)
                ? <div className="notes-list">
                    {notes.map((note => (
                        <Note key={note.id} note={note} />
                    )))}
                </div>
                : <p className="notes-list__empty-message">Tidak ada catatan</p>
            }
        </>
    );
}

export default NotesList;