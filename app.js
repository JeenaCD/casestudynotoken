const express = require('express'); 
const path = require ('path'); 
const cors = require('cors'); // Part #2 Point 7
const bodyParser = require('body-parser'); // Part #1 Point 2
const cookieParser = require('cookie-parser');


const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter'); // Part #1 Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
const logoutRouter = require('./src/routes/logoutroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 



app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 
app.use(cookieParser());

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 
app.use('/logout',logoutRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});




const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server Ready on 5000"); // Part #1 Point 5
});