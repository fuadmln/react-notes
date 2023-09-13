import { useState } from "react";

const NoteInput = () => {
    const [formData, setFormData] = useState({title: '', body: ''});

    const changeTitleHandler = (e) => {
        if(e.target.value.length > 50) return;

        setFormData(data => ({...data, title: e.target.value}));
    }

    const changeBodyHandler = (e) => {
        setFormData(data => ({...data, body: e.target.value}));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({title: '', body: ''});
    }

    return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form onSubmit={submitHandler}>
                <p className="note-input__title__char-limit">
                    Sisa karakter: { formData.title.length ? 50-formData.title.length : 50 }
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