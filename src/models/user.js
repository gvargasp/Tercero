const { Schema, model } = require('mongose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
}, {
  timestamps: true
});

model.exports = model('User', noteSchema);