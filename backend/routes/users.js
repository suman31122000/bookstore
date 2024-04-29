var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');

const bookschema=mongoose.Schema({
  name:String,
  description:String,
  author:String,
  image:String,
  price:Number,
  quantity:{type:Number,default:1},
  date: { type: Date, default: Date.now }
})
const model=mongoose.model("bookmodel",bookschema)
mongoose.connect("mongodb+srv://suman:suman123456@cluster0.zetavyr.mongodb.net/")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = model;
