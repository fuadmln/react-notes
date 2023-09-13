import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import {getInitialData} from './utils';
import { useState } from "react";

import './styles/style.css';

function NotesApp(){
    const [notes, setNotes] = useState(() => getInitialData());
    const [filteredNotes, setFilteredNotes] = useState([]);

    const currentNotes = filteredNotes.length == 0 ? notes : filteredNotes;

    return(
        <>
        <Header notes={notes} setFilteredNotes={setFilteredNotes} />
        <Main notes={ currentNotes } setNotes={setNotes} />
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);