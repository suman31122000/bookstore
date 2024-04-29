var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');

const commentSchema = mongoose.Schema({
    user: String,
    bookname:String,
    comment: String,
    date: { type: Date, default: Date.now }
});
const model=mongoose.model("commentmodel",commentSchema)
mongoose.connect("mongodb+srv://suman:suman123456@cluster0.zetavyr.mongodb.net/")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = model;
