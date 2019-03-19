const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  responded: {
    type: Boolean,
    default: false,
  },
});

module.exports = recipientSchema;
