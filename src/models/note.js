const { Schema, model } = require('mongose')

const noteSchema = new Schema({
  title: String,
  content: {
    type: String,
    required: true
  },
  author: String
}, {
  timestamps: true
});

model.exports = model('Note', noteSchema);