const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(db => console.log('Database is open'))
  .catch(err => console.error(err));

module.exports = mongoose