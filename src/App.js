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
      Estoy
      <Routes>
        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </Routes>
    </Router>  
  );
}