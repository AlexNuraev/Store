const mongoose = require('mongoose');

const brandScheme = mongoose.Schema ({
    name : {
        type : String , 
        required : true ["Must enter brand name"]
    },
    // toJSON: { virtuals : true},
    // toObject: { virtuals : true},
});

const brand = mongoose.model('Brand', brandScheme);

module.exports = brand;