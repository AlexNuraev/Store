const mongoose = require('mongoose');

const fabricScheme = mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        require: true["Must enter fabric name"]
    },
    color: {
        type: String,
    },

},
    { timestamps: true }
)

fabricScheme.virtual('fabrics', {
    ref: 'Fabric',
    localField: '_id',
    foreignField: 'Fabric',
});

const fabric = mongoose.model('Fabric', fabricScheme);

module.exports = fabric;