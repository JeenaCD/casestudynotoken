const express = require('express')
const User = require('../model/User');; 
const loginRouter = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


loginRouter.get('/',function(req,res){
    res.render('login',{});   
})


const maxAge = 3 * 24 * 60 *60;
loginRouter.get("/check",async (req,res)=>{
    console.log(req.param("uid"));
    const user = await User.findOne({uid:req.param("uid")}); 
    if(!user) return res.redirect('/signup');
    const validPass = await bcrypt.compare(req.param("pwd"),user.pwd);
    if(!validPass) return res.redirect('/login');
    res.redirect('/home');
})

module.exports = loginRouter;