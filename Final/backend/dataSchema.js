const mongoose = require('mongoose')
const ReactFormDataSchema = new mongoose.Schema({
_id: {type: Number},
title: {type: String},
description: {type: String},
category: {type: String},
image: {type: String},
rate : {type: Number},

} ,
//todo
{ collection: "" }
)
const Product = mongoose.model('Product', ReactFormDataSchema)
module.exports = Product