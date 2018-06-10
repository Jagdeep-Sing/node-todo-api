var mongoose = require('mongoose');
//mongo db User model
const newUser = mongoose.model('newUser', {
  email:{
    type: String,
    minlength: 1,
    trim: true,
    required: true
  }
});

module.exports = {newUser};
