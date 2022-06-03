const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library',{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/Library',{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb+srv://Sia:sarin@cluster0.1ekid0y.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,useUnifiedTopology: true});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;