import {showFormattedDate} from '../utils';

const Note = ({note, setNotes}) => {
    const deleteHandler = (id) => {
        setNotes(notes => (notes.filter(note => note.id != id)));
    }

    const archiveHandler = (id) => {
        setNotes(notes => {
            const updatedNotes = [...notes];
            const index = updatedNotes.findIndex(note => note.id == id);
            updatedNotes[index].archived = !(updatedNotes[index].archived);
            
            return updatedNotes;
        })
        
    }

    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={ () => {deleteHandler(note.id)}}>Delete</button>
                <button className="note-item__archive-button" onClick={() => {archiveHandler(note.id)}}>
                    {note.archived ? 'Pindahkan' : 'Arsipkan'}
                </button>
            </div>
        </div>
    );
}

export default Note;