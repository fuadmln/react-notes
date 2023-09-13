import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';

import './styles/style.css';

function NotesApp(){
    return(
        <>
        <Header />
        <Main />
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);