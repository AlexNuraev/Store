const mongoose = require('mongoose');

const sizeScheme = mongoose.Schema({
    size: {
        type: String,
        required: true['must enter a size']
    }
})

const size = mongoose.model('Size', sizeScheme);

module.exports = size;