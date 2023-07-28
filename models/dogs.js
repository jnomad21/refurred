const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogsSchema = new Schema({
    event: { type: String, required: true},
    category: {type: String, enum:['Automotive', 'Education', 'Financial', 'Health', 'Personal', 'Work'],require: true},
    date: { type: Date, required: true},
    time: { type: String},
    name: { type: String, required: true},
    phone_number: { type: String},
    email: { type: String},
    website: {type: String},
    importance: {type: String, enum:['High', 'Mid', 'Low']},
    notes: {type: String},
    uploaded_by: {type: Schema.Types.ObjectId, ref: 'User'}
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('Event', dogsSchema);