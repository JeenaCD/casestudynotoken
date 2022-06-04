const express = require('express'); 
const authorsRouter = express.Router();
const authordata = require('../model/AuthorModel');

//router to render authors page
authorsRouter.get('/',function(req,res){
    authordata.find() 
    .then(function (authors) {
    res.render('authors',{
        authors
    });

    })
})





//router to render add author page
authorsRouter.get('/addauthor',function(req,res){
    res.render('addauthor',{});

});


//router to add author
authorsRouter.post('/add', function (req, res) {

    var item={
        title:req.body.title,
        image:req.body.image,       // Part #2 Point 8
        about:req.body.about
    }
    console.log(item)  ;
    const author = new authordata(item);
    author.save();
    res.redirect('/authors');

})



//router for single author
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    authordata.findOne({ _id: id })
            .then(function (author) {
                res.render('author', {
                    author
                })

            })
    
});


// Part #2 Point 9

//router to delete author
authorsRouter.post('/delete', function (req, res) {
    authordata.remove({ _id: req.body.id}, (err,data)=>{
        if(err){
            throw err;
        }
        res.redirect('/authors')
    });
    
})



//router to edit author
authorsRouter.post('/edit', function (req, res) {

    authordata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editauthor', {data})
        }
    })
})




//router to update author
authorsRouter.post('/update', function (req, res) {

    authordata.findOneAndUpdate({_id: req.body.id},req.body,{new:true, useFindAndModify:false}, (err,data)=>{
        if(err){
            res.json({ status: "Failed" });
        }
        else {
            res.redirect("/authors");
        }
    });
})


module.exports = authorsRouter;