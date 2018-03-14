var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stateSchema = new Schema({
   name: String, //referenced by Transition model for destination state
   policies: [],
   transitions: [] //list of transition names
});

var State = mongoose.model('State', stateSchema);

module.exports = State;
