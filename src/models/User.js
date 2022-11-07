const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password:{
    type: String,
    minlength: 5
  },
  type:{
    type: String,
  },
  tel:{
    type: String,
  },
  company:{
    type: String,
  },
  address:{
    type: String,
  },
  address2:{
    type: String,
  },
  City:{
    type: String,
  },
  Postcode:{
    type: String,
  },
  Province:{
    type: String,
  },
  Country:{
    type: String,
  },
  txtid:{
    type: String,
  },
}, {
  timestamps: true,
});
const UserModel = mongoose.model('User', User);
module.exports = UserModel;