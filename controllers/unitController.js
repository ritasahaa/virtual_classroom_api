const Unit = require('../models/Unit');

exports.createUnit = async (req, res) => {
  try {
    const newUnit = await Unit.create({
      name: req.body.name,
      classId: req.body.classId
    });
    res.status(201).json({ status: 'success', data: newUnit });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
