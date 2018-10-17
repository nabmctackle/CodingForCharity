var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
var mongoose = require('mongoose');
var path= require('path');
mongoose.connect('mongodb://localhost/commerce');
app.use(express.static(__dirname+"/angular-app/dist/angular-app"))
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
    name: {type:String, required:[true,"Name required"], minlength:2},
    age: {type:Number, required:[true,"Age is required"]},
    gender: {type:String, required:[true,"Gender is required"]},
    password:{type:String, required:[true,"Password is required"]}

})
mongoose.model("User", UserSchema);
var User = mongoose.model('User')
app.listen(8000, function() {
    console.log("listening on port 8000");
})