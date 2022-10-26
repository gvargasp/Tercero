const express = require('express');
const cors = require('cors');
const app = express();

// Setting
app.set('port', process.env.PORT || 4000)

// Midleware
app.set(cors());
app.set(express.json());

// routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
*/
module.exports = app;