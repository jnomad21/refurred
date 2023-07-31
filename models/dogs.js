const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogsSchema = new Schema({
    breed: { type: String, required: true},
    sizeGroup: {type: Number, enum:[1, 2, 3, 4, 5, 6], required: true},
    sizeActual: {type: String, required: true},
    vocal: { type: Number,enum:[1, 2, 3], required: true},
    shed: { type: Number,enum:[1, 2, 3], required: true},
    activity: { type: Number,enum:[1, 2, 3], required: true},
    space: { type: Number,enum:[1, 2, 3, 4], required: true},
    children:{ type: Number,enum:[1, 2, 3], required: true},
    otherPets: { type: Number,enum:[1, 2], required: true},
    friendly: { type: Number,enum:[1, 2, 3], required: true},
    training: { type: Number,enum:[1, 2, 3], required: true},
    
}, 
);

module.exports = mongoose.model('Event', dogsSchema);