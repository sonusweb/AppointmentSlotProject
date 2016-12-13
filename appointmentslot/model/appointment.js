var mongoose = require('mongoose');

//appointment schema
var appointmentSchema = mongoose.Schema({
    appointmentdate : {type: Date,required: false},
    name : {type: String},
    phone : {type: String},
    create_date : {type: Date,default: Date.now},
});

var Appointment = module.exports = mongoose.model('appointment', appointmentSchema);

//get Appointment
module.exports.getAppointment = function (callback) {
    Appointment.find(callback);
}

