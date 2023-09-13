import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';

import './styles/style.css';

function NotesApp(){
    return(
        <Header />
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);