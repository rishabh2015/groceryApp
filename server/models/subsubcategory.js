const mongoose = require('mongoose');

var subsubCategory = require("./brand.js"),
    subsubcategorySchema = mongoose.model("Brand").schema;

const subcategorySchema = mongoose.Schema({

    name:{
        required: true,
        type: String,
        unique: 0,
        maxlength: 100
    },
    brands:[subsubcategorySchema]
});

const SubSubCategory = mongoose.model('SubSubCategory',subcategorySchema);

module.exports = { SubSubCategory }