const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      author: req.user._id,
      sessionId: req.body.sessionId,
      parentComment: req.body.parentComment || null
    });
    res.status(201).json({ status: 'success', data: newComment });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
