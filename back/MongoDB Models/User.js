const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validation');

const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: 0}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);