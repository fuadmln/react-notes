import { useState } from "react";

const NoteInput = ({setNotes}) => {
    const maxTitleLength = 50;
    const [formData, setFormData] = useState({title: '', body: ''});

    const changeTitleHandler = (e) => {
        if(e.target.value.length > maxTitleLength) return;

        setFormData(data => ({...data, title: e.target.value}));
    }

    const changeBodyHandler = (e) => {
        setFormData(data => ({...data, body: e.target.value}));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newNote = {
            ...formData,
            id: +new Date(),
            archived: false,
            createdAt: new Date().toISOString()
        }
        
        setNotes( notes => [...notes, newNote] );
        setFormData({title: '', body: ''});
    }

    return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form onSubmit={submitHandler}>
                <p className="note-input__title__char-limit">
                    Sisa karakter: { formData.title.length ? maxTitleLength-formData.title.length : maxTitleLength }
                </p>
                <input 
                    type="text" 
                    className="note-input__title" 
                    placeholder="judul catatan" 
                    required 
                    value={formData.title} 
                    onChange={changeTitleHandler}
                />
                <textarea 
                    className="note-input__body" 
                    required 
                    placeholder="tulis catatan" 
                    value={formData.body} 
                    onChange={changeBodyHandler}
                />
                <button type="submit">Buat</button>
            </form>
        </div>
    );
}

export default NoteInput;