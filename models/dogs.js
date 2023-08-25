const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogsSchema = new Schema({
    breed: { type: String, required: true},
    sizeGroup: {type: Number, enum:[1, 2, 3, 4, 5, 6], required: true},
    sizeActual: {type: String, required: true},
    affection: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    children: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    otherDogs: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    shed: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    drool: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    groom: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    coatType: {type: String, enum:["Wiry", "Rough", "Curly", "Hairless", "Corded", "Wavy", "Smooth", "Double", "Silky"]},
    coatLength: {type: String, enum:["Short", "Medium", "Long"]},
    strangers: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    play: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    protect: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    adapt: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    train: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    energy: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    vocal: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    mentalStim: { type: Number,enum:[1, 2, 3, 4, 5], required: true},
    about: { type: String},
    image: { type: String },
},
);

module.exports = mongoose.model('Dogs', dogsSchema);