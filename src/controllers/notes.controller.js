const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
 }

notesCtrl.createNote = (req, res) => res.send('POST - Note routes')

notesCtrl.getNote = (req, res) => res.json({ message: 'GET - Note routes' })
notesCtrl.updateNote = (req, res) => res.json({ message: 'PUT - Note routes' })
notesCtrl.deleteNote = (req, res) => res.json({ message: 'DELETE - Note routes' })

module.exports = notesCtrl;