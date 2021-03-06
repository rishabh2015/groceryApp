const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength:50
    },
    description:{
        required: true,
        type: String,
        maxlength:100000
    },
    oldprice:{
        required: true,
        type: Number,
        maxlength: 255
    },
    price:{
        required: true,
        type: Number,
        maxlength: 255
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    shipping:{
        required: true,
        type: Boolean
    },
    available:{
        required: true,
        type: Boolean
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subcategory:{
      type: Schema.Types.ObjectId,
      ref:'SubCategory',
      required: true
    },
    subsubcategory:{
      type: Schema.Types.ObjectId,
      ref:'SubSubCategory',
      required: true
    },
    cases:{
        required: true,
        type: Number
    },
    discount:{
        type:Number,
        maxLength: 100,
        default: 0
    },
    sold:{
        type: Number,
        maxlength: 100,
        default: 0
    },
    publish:{
        required: true,
        type: Boolean
    },
    images:{
        type: Array,
        default:[]
    }
},{timestamps:true});

const Product = mongoose.model('Product',productSchema);
module.exports = { Product }