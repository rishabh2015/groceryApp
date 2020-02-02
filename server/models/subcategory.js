const mongoose = require('mongoose');

var subsubCategory = require("./subsubcategory.js"),
    subsubcategorySchema = mongoose.model("SubSubCategory").schema;

const subcategorySchema = mongoose.Schema({
    

    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    SubSubCategory:[subsubcategorySchema]
});

const SubCategory = mongoose.model('SubCategory',subcategorySchema);

module.exports = { SubCategory }