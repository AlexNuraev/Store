const mongoose = require('mongoose');

const providerScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true["Must enter provider"]
    },
    destributionArea: {
        type: String,
        enum: {
            values: ['Center', 'North', 'South', 'West'],
            message: 'must enter destribution area',
        },
    }
})


const provider = mongoose.model('Provider', providerScheme);

module.exports = provider;