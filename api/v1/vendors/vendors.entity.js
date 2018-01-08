const mongoose = require('mongoose');



let schema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, unique: true, required: true },
  // REFERENCE
  contactEmail: { type: String, require: true },
  sellerRank: { type: Number, },
  addedOn: { type: Date, default: Date.now },
}, { collection: 'vendors' });



//Creating the model, model is the runtime object instance of the schema
module.exports = mongoose.model("vendors", schema);




