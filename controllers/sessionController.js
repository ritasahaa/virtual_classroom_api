const Session = require('../models/Session');

exports.createSession = async (req, res) => {
  try {
    const newSession = await Session.create({
      name: req.body.name,
      material: req.body.material,
      unitId: req.body.unitId
    });
    res.status(201).json({ status: 'success', data: newSession });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
