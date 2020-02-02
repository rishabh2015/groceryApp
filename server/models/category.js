const mongoose = require('mongoose');
var subCategory = require("./subcategory.js"),
      subCategorySchema = mongoose.model('SubCategory').schema;

const categorySchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    subCategories:[subCategorySchema]
});

const Category = mongoose.model('Category',categorySchema);

module.exports = { Category }
