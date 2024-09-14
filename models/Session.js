// for chapters------
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  material: { type: String, required: true },
  unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
});

module.exports = mongoose.model('Session', sessionSchema);
