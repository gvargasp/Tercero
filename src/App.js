//Back End 
const express = require('express');
const cors = require('cors');
const app = express();
// Setting
app.set('port', process.env.PORT || 4000)

// Midleware
app.set(cors());
app.set(express.json());
app.use(express.json());
// routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app;