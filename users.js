const express = require('express');
const User = require('../models/User');
const { authenticate, authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/', authenticate, authorizeAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send('Kullanıcılar getirilemedi: ' + error.message);
  }
});

router.delete('/:id', authenticate, authorizeAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).send('Kullanıcı başarıyla silindi!');
  } catch (error) {
    res.status(400).send('Kullanıcı silinemedi: ' + error.message);
  }
});

module.exports = router;