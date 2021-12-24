const mongoose = require('mongoose');

const shirtScheme = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true["shirt must have a color"]
    },
    price: {
        type: String,
        required: true["shirt must have price"]
    },

})

const shirt = mongoose.model('Shirt', shirtScheme);

module.exports = shirt;