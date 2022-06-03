const mongoose = require('mongoose');   // Part #2 Point 10
// const { stringify } = require('nodemon/lib/utils');
// mongoose.connect('mongodb://localhost:27017/Library',{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/Library',{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb+srv://Sia:sarin@cluster0.1ekid0y.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true});
const userSchema = new mongoose.Schema({
    id: Number,
    uid: String,
    pwd:String
})

module.exports = mongoose.model('User',userSchema);