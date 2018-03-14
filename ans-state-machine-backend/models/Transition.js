var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transitionSchema = new Schema({
   name: String,
   destination: String, //State name references what state to transition to
   transition_event: String
});

var Transition = mongoose.model('Transition', transitionSchema);

module.exports = Transition;