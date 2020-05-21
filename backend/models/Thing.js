/*Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* Schema
*/
const thingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

/*
Export
*/
const MyModel = mongoose.model('Thing', thingSchema);
module.exports = MyModel;
//
