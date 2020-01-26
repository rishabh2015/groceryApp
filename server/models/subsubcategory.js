const mongoose = require('mongoose');

const subcategorySchema = mongoose.Schema({
    parentCategoryName:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },

    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const SubSubCategory = mongoose.model('SubSubCategory',subcategorySchema);

module.exports = { SubSubCategory }