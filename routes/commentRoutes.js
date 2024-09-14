const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { addComment } = require('../controllers/commentController');
const router = express.Router();

router.post('/add', protect, addComment);

module.exports = router;
