var express = require('express');
var router = express.Router();
const mongoose = require('./users'); // Importing Mongoose (assuming 'users' is your Mongoose model)
const comment=require('./user1');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 
});

router.post('/add', async (req, res) => {
  try {
    const name = req.body.name; 
    let existingBook = await mongoose.findOne({ name: name });

    if (existingBook) {
      existingBook.quantity += 1; // Assuming you have a 'quantity' field in your book schema
      await existingBook.save();
      res.status(200).json({ message: "Quantity increased successfully" });
    } else {
      const newBook = new mongoose(req.body); // Assuming the request body contains all necessary fields for creating a new book
      await newBook.save();
      res.status(200).json({ message: "Book added successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.get('/find',async (req, res) => {
 const data=await mongoose.find()
  res.send(data);
    });

    router.get('/find/:name',async (req, res) => {
      const data=await mongoose.findOne({name:req.params.name})
      if(data)
       res.send(data);
      else{
        res.send("book not found");
      }
         });


    router.get('/delete/:name', async (req, res) => {
      try {
        const name = req.params.name;
        const existingBook = await mongoose.findOne({ name: name });
    
        if (existingBook.quantity) {
          if (existingBook.quantity > 1) {
            existingBook.quantity -= 1;
            await existingBook.save();
            res.status(200).json({ message: "Book quantity decremented successfully" });
          } else {
            const result = await mongoose.deleteOne({ name: name });
            res.status(200).json({ message: "Book deleted" });
          }
        } else {
          res.status(404).json({ message: "Book not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    


    //comment

    router.post('/comment',async (req,res)=>{
      try{
        const newcomment = new comment(req.body); 
      await newcomment.save();
      res.status(200).json({ message: "comment added successfully" });
      }
      catch{
        console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
      }
    })

    router.get('/getcomment',async(req,res)=>{
      const data=await comment.find();
      res.send(data);
    })

    router.post('/update', async (req, res) => {
      const { bookTitle, bookFields } = req.body;
      console.log('bookTitle:', bookTitle);
    console.log('bookFields:', bookFields);
  
      try {
          const result = await mongoose.updateMany(
              { title: bookTitle },
              { $set: bookFields }
          );
  
          console.log('Books updated successfully:', result.nModified);
          res.send('Books updated successfully');
      } catch (err) {
          console.error('Error updating books:', err);
          res.status(500).send('Error updating books');
      }
  });
    

module.exports = router;
