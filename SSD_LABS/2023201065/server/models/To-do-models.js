const mongoose = require('mongoose');
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  status: {
    type: String,
    default: 'incomplete', 
  }, 
});

module.exports = mongoose.model('TodoList', todoSchema)
