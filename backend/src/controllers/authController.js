const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function register(req, res) {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: 'Email already used' });
    }




    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash: hash, name });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.json({ token, user: { id: user._id, email, name } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

module.exports = { register, login };
