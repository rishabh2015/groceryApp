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
    },
    childCategoryName:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const SubCategory = mongoose.model('SubCategory',subcategorySchema);

module.exports = { SubCategory }