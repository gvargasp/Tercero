const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: ['GET - Notes routes'] })
notesCtrl.createNote = (req, res) => res.send('POST - Note routes')

notesCtrl.getNote = (req, res) => res.json({ message: 'GET - Note routes' })
notesCtrl.updateNote = (req, res) => res.json({ message: 'PUT - Note routes' })
notesCtrl.deleteNote = (req, res) => res.json({ message: 'DELETE - Note routes' })

module.exports = notesCtrl;