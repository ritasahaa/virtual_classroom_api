const express = require('express');
const { protect, restrictTo } = require('../middleware/authMiddleware');
const { createClass, enrollStudent } = require('../controllers/classController');
const router = express.Router();

router.post('/create', protect, restrictTo('admin'), createClass);
router.post('/:classId/enroll', protect, restrictTo('admin'), enrollStudent);

module.exports = router;
