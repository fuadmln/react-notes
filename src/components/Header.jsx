import { useState } from "react";

const Header = ({setSearch}) =>{
    const [keyword, setKeyword] = useState('');

    const changeSearchHandler = (e) => {
        setKeyword(e.target.value);
        setSearch(e.target.value);
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