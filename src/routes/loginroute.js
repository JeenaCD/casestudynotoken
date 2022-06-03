const express = require('express')
const User = require('../model/User');; 
const loginRouter = express.Router();
const bcrypt = require('bcryptjs');


loginRouter.get('/',function(req,res){
    res.render('login',{});   
})


loginRouter.post("/check",async (req,res)=>{
    console.log(req.body.uid);
    const user = await User.findOne({uid:req.body.uid}); 
    if(!user) return res.redirect('/signup');
    const validPass = await bcrypt.compare((req.body.pwd),(user.pwd));
    if(!validPass) return res.redirect('/login');
    res.redirect('/home');
});

module.exports = loginRouter;