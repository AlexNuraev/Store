const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 100
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Brand'
    },
    fabric: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Fabric'
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Provider'
    },
    shirt: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Shirt'
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'Size'
    },
    active: {
        type: Boolean,
        default: true
    },
},
    {
        timestamp: true,
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;