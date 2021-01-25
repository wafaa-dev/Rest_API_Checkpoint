let mongoose =require('mongoose');

//User schema
let UserSchema=mongoose.Schema({
    name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: Number,
  },
  
});

module.exports = users = mongoose.model('users',UserSchema);

