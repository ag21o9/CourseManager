const mongoose = require('mongoose');

const courseschema = mongoose.Schema({
    courseid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "adminM",
        required : [true]
    },
    coursename : {
        type : String,
        require : [true]
    },
    coursedesc : {
        type : String,
        require : [true]
    }
})

const model = mongoose.model("users",courseschema);

module.exports = model;
