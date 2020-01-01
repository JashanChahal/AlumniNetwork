const mongoose = require('mongoose');
const validator = require('validator');

var userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:3
    }
});


var user = mongoose.model('user',userSchema);

module.exports = {user};