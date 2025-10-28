const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // null => global/default
  name: { type: String, required: true },
  color: { type: String, default: '#6366f1' }
});

module.exports = mongoose.model('Category', categorySchema);

