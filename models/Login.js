const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
var Login = new Schema({
    username: {
    type: String
  },
//     email: {
//     type: String
//   },
    Pass: {
    type: String
  }
//   description: {
//     type: String
//   }
},{
    collection: 'users'
});

module.exports = mongoose.model('Login', Login);