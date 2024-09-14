const jwt = require('jsonwebtoken');
const User = require('../models/User');

const createToken = (userId, role) => jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createToken(user._id, user.role);
    res.status(201).json({ status: 'success', token, user });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password, user.password))) {
      return res.status(401).json({ status: 'fail', message: 'Incorrect email or password' });
    }
    const token = createToken(user._id, user.role);
    res.status(200).json({ status: 'success', token, user });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
