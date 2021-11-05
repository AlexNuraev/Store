const mongoose = require('mongoose');

const fabricScheme = mongoose.Schema ({
    name : {
        type : String ,
        require : true ["Must enter fabric name"]
    },
    color : {
        type : String , 
        require : true ["Must enter fabric color"]
    }
})

const fabric = mongoose.model('Fabric', fabricScheme);

module.exports = fabric;