const express = require('express');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const { createSession } = require('../controllers/sessionController');
const router = express.Router();

router.post('/create', protect, restrictTo('admin'), createSession);

module.exports = router;
    