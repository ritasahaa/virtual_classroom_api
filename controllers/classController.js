const Class = require('../models/Class');

exports.createClass = async (req, res) => {
  try {
    const newClass = await Class.create({
      name: req.body.name,
      instructor: req.user._id
    });
    res.status(201).json({ status: 'success', data: newClass });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

exports.enrollStudent = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.classId);
    if (!classData) return res.status(404).json({ status: 'fail', message: 'Class not found' });

    classData.students.push(req.body.studentId);
    await classData.save();
    res.status(200).json({ status: 'success', data: classData });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
