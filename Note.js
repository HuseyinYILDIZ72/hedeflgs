const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
  course: { type: String, required: true } // Course name
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;