const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library',{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/Library',{useNewUrlParser: true,useUnifiedTopology: true});
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;