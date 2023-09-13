import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import {getInitialData} from './utils';
import { useState } from "react";

import './styles/style.css';

function NotesApp(){
    const [notes, setNotes] = useState(() => getInitialData());
    const [search, setSearch] = useState('');

    const currentNotes = search 
        ? notes.filter(note => note.title.toLowerCase().includes(search))
        : notes;

    return(
        <>
        <Header setSearch={setSearch} />
        <Main notes={ currentNotes } setNotes={setNotes} />
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);