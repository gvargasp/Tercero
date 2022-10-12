import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './componentes/Navigation';
import CreateNote from './componentes/CreateNote';
import CreateUser from './componentes/CreateUser';
import NotesList from './componentes/NotesList';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={ <NotesList /> } />
        <Route path="/edit/:id" element={ <CreateNote/> } />
        <Route path="/create" element={ <CreateNote/> } />
        <Route path="/user" element={ <CreateUser/> } />
      </Routes>
    </Router>  
  );
}