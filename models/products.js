const mongoose = require('mongoose');

//creating the product schema
const productSchema = mongoose.Schema({
  name: 
  {
     type: String,
     required: true,
  },
  quantity: 
  {
     type: Number,
      required: true 
  },
});

module.exports = mongoose.model('Product', productSchema);