var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create model
var DataSchema = new Schema({
    firstName: { type: String, required: [true, 'firstName field is required'] },
    lastName: { type: String, required: [true, 'lastName field is required'] },
    id: { type: Number, required: [true, 'id field is required'] }
});
// create model
var Data = mongoose.model('data', DataSchema);
module.exports = Data;
