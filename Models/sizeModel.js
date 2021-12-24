const mongoose = require('mongoose');

const sizeScheme = mongoose.Schema({
    id: {
        type: String,
    },
    size: {
        type: String,
        required: true['must enter a size']
    }
})

const size = mongoose.model('Size', sizeScheme);

module.exports = size;