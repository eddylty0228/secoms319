const mongoose = require('mongoose')
const ReactFormDataSchema = new mongoose.Schema({
_id: {type: Number},
id: {type: Number},
name: {type: String},
description: {type: String},
category: {type: String},
image: {type: String},
rate : {type: Number},

} ,
//todo
{ collection: "final_data" }
)
const Product = mongoose.model('Product', ReactFormDataSchema)
module.exports = Product