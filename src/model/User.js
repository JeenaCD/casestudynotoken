const mongoose = require('mongoose');   
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true});
const userSchema = new mongoose.Schema({
    id: Number,
    uid: String,
    pwd:String
})

module.exports = mongoose.model('User',userSchema);