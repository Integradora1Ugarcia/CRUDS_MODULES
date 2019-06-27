const mongoose = require ('mongoose');
const { Schema } = mongoose;

const PcSchema = new Schema({
    model: { type: String, required: true },
    mark: { type: String, required: true},
    year: { type: String, required: true },    
    os: { type: String, required: true }
});

module.exports = mongoose.model('Pc', PcSchema);