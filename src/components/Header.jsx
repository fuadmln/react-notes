import { useState } from "react";

const Header = ({notes, setFilteredNotes}) =>{
    const [keyword, setKeyword] = useState('');

    const changeSearchHandler = (e) => {
        setKeyword(e.target.value);
        
        setFilteredNotes(() => {
            return notes.filter(note => note.title.toLowerCase().includes(e.target.value));
        });
    }

    return (
        <header className="note-app__header">
            <h1>Notes App</h1>
            <div className="note-search">
                <input type="text" placeholder="Cari catatan..." value={keyword} onChange={changeSearchHandler} />
            </div>
        </header>
    );
}

export default Header;