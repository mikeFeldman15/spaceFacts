const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cookieSchema = new Schema({
  cookieId: { type: String, required: true, unique: true},
  createdAt: { type: Date, expires: 30, default: Date.now}
})

module.exports = mongoose.model('Cookie', cookieSchema);