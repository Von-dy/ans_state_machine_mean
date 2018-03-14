var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var deviceSchema = new Schema({
    host_name: String,
    ip_address: String,
    user_name: String,
    password: String
});

// Model methods
deviceSchema.methods.addNewDevice = function() {
    mongoose.connection.collection('devices').insert(this);
};

deviceSchema.methods.removeDevice = function() {
    mongoose.connection.collection('devices').find({host_name:this.host_name}).remove().exec();
};

// Create a model.
var Device = mongoose.model('Device', deviceSchema);
module.exports = Device;