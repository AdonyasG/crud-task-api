const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
    .then(()=>{
        console.log("Db Connected Sucessfully")
    })
    .catch((error)=>{
        console.log("Error occured while Db connection", error)
    });

    module.exports = mongoose;