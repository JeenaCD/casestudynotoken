const express = require('express'); 
const booksRouter = express.Router();
const bookdata = require('../model/BookModel');


//router to render books page
booksRouter.get('/',function(req,res){
    bookdata.find() 
    .then(function (books) {
    res.render('books',{
        books
    });
    })
})

//router to render addbook page
booksRouter.get('/addbook',(req,res)=>{
    res.render('addbook',{});

});

//router to add book
booksRouter.post('/add', function (req, res) {
    var item={
        title:req.body.title,
        author:req.body.author,
        image:req.body.image,
        about:req.body.about
    }
    console.log(item)  ;
    const book = new bookdata(item);
    book.save();
    res.redirect('/books');
})

//router for singlebook
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    bookdata.findOne({ _id: id })
            .then(function (book) {
                res.render('book', {
                    book
                })

            })
    
});


// Part #2 Point 9 

//router to delete book
booksRouter.post('/delete', function (req, res) {
    bookdata.remove({ _id: req.body.id}, (err,data)=>{
        if(err){
            throw err;
        }
        res.redirect('/books')
    });
})


//router to edit book
booksRouter.post('/edit', function (req, res) {

    bookdata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editbook', {data})
        }
    })
})



//router to update book


booksRouter.post('/update', function (req, res) {
        bookdata.findOneAndUpdate({_id: req.body.id},req.body,{new:true, useFindAndModify:false}, (err,data)=>{
            if(err){
                res.json({ status: "Failed" });
            }
            else {
                res.redirect("/books");
            }
        });
    })

module.exports = booksRouter;