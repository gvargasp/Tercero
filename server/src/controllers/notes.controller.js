const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
 }

notesCtrl.createNote = async (req, res) => {
  const { title, content, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    author: author
  });
  console.log(newNote);
  await newNote.save();
  res.json({ message: 'SAVE - Note Saved' })
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json({ message: 'GET - Note routes' })
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body
  await Note.findOneAndUpdate({ _id: req.params.id }, {
    title: title, 
    content: content,
    author: author
  });
  res.json({ message: 'PUT - Note routes' })
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'DELETE - Note routes' })
};

module.exports = notesCtrl;