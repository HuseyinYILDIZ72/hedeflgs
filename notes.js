const express = require('express');
const Note = require('../models/Note');
const { authenticate, authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, authorizeAdmin, async (req, res) => {
  const { type, content, course } = req.body;
  try {
    const note = new Note({ type, content, course });
    await note.save();
    res.status(201).send('Ders notu başarıyla eklendi!');
  } catch (error) {
    res.status(400).send('Ders notu eklenemedi: ' + error.message);
  }
});

router.get('/:course', authenticate, async (req, res) => {
  const { course } = req.params;
  try {
    const notes = await Note.find({ course });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).send('Ders notları getirilemedi: ' + error.message);
  }
});

router.delete('/:id', authenticate, authorizeAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.status(200).send('Ders notu başarıyla silindi!');
  } catch (error) {
    res.status(400).send('Ders notu silinemedi: ' + error.message);
  }
});

module.exports = router;