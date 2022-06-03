const express = require('express');
const logoutRouter = express.Router();

logoutRouter.get('/',function(req,res){
    res.render('index',{});    
})

module.exports = logoutRouter;