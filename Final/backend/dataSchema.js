const mongoose = require('mongoose')
const ReactFormDataSchema = new mongoose.Schema({
_id: {type: Number},
id: {type: Number},
name: {type: String},
description: {type: String},
category: {type: String},
image: {type: String},
rating :{ 
rate: {type: Number},
count: {type:Number}
}

} ,
//todo
{ collection: "final_data" }
)
const CollectionDataSchema = new mongoose.Schema({
    _id: {type: Number},
    id: {type: Number},
    name: {type: String},
    description: {type: String},
    category: {type: String},
    image: {type: String},
    rating :{ 
    rate: {type: Number},
    count: {type:Number}
    }
    
    } ,
    //todo
    { collection: "collection" }
    )
const Collection = mongoose.model('Collection',CollectionDataSchema)
const Product = mongoose.model('Product', ReactFormDataSchema)
module.exports = Product,Collection