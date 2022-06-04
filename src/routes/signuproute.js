const express = require('express'); 
const signupRouter = express.Router();
const User = require('../model/User');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

signupRouter.get('/',function(req,res){
    res.render('signup',{});
})

signupRouter.post("/adduser",async (req,res)=>{

    // hashing passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pwd,salt);

    // create a new user
    const user = new User({
        id: req.body.id,  // Part #2 Point 10
        uid: req.body.uid,
        pwd:hashedPassword
    })
    try{
        const savedUser = await user.save();
        res.redirect("/login");
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = signupRouter;