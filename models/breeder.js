const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const breederSchema = new Schema({
    breed: {type: String},
    orgName: { type: String},
    contactName: {type: String},
    address: { type: String},
    city: {type: String},
    state: {type: String, enum: [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
      ]},
    zipCode: {type: Number},
    phone: { type: String},
    website: { type: String},
    
}, 
);

module.exports = mongoose.model('Breeders', breederSchema);