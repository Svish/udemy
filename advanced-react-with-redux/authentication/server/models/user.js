const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// On Save Hook, encrypt password
userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
