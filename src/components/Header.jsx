const Header = ({notes, setFilteredNotes}) =>{
    const changeSearchHandler = (e) => {
        console.log(typeof e.target.value);
        setFilteredNotes(() => {
            return notes.filter(note => note.title.toLowerCase().includes(e.target.value));
        });
    }

    return (
        <header className="note-app__header">
            <h1>Notes App</h1>
            <div className="note-search">
                <input type="text" placeholder="Cari catatan..." onChange={changeSearchHandler} />
            </div>
        </header>
    );
}

export default Header;