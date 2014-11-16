'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  hacker: Boolean,
  hipster: Boolean,
  hustler: Boolean,
  owner: String
});

module.exports = mongoose.model('Idea', IdeaSchema);