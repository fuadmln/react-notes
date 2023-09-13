const NoteInput = () => {
    return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form>
                <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                <input type="text" className="note-input__title" placeholder="judul catatan" required/>
                <textarea className="note-input__body" required placeholder="tulis catatan"></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    );
}

export default NoteInput;