const express=require('express')
const app=express()
app.use(express.json())
const PORT=3000
//validators
const {checkSchema,validationResult,matchedData}=require('express-validator')
const userSchema=require('../validator/validator.js')
const session=require('express-session')
app.use(session({saveUninitialized:false,resave:false,secret:'Hello'}))
const passport=require('passport')
const strategy=require('passport-local').strategy
require('../strategy/authentication.js')
app.use(passport.initialize())
app.use(passport.session())
//hashing
const {hash}=require('../hashing/hash.js')
//database
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/website').then(()=>console.log('Connected to the database')).catch((err)=>console.log(err))
const userDocumentation=require('../mongodb/documentation.js')
// path
const path=require('path')
const static_path=path.join(__dirname,'../public')
app.use(express.static(static_path));

const urlencodedParser = express.urlencoded({ extended: false });
const exphbs=require('express-handlebars')
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine); // Use the engine from the instance
app.set('view engine', 'handlebars');
//authentication
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth'); 
}
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/default.html'))
})

app.get('/img',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/default.jpg'))
})

app.get('/create',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/login.html'))
})
app.post('/create', urlencodedParser,checkSchema(userSchema), async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { body } = req;
        body.password = await hash(body.password);
        const newUser = new userDocumentation(body);
        const savedUser = await newUser.save();
        console.log("User saved");
        res.send('account');
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get('/auth',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/authentication.html'))
})
app.post('/auth',urlencodedParser,passport.authenticate('local'),(req,res)=>{
    res.redirect('/blog')
})
app.get('/blog',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/blog.html'))
})
//after authenticaton route
app.get('/projects',isAuthenticated,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/homepage/home.html'))
})
app.get('/gallery',isAuthenticated,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/homepage/gallery.html'))
})
app.get('/Musiclibrary',isAuthenticated,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/homepage/music.html'))
})
app.get('/signout', (req, res) => {
    req.logout(()=>console.log('LOGOUT')); // Passport method to log out
    res.redirect('/'); // Redirect to login page after sign out
});
//projects route
app.get('/project/calculator',isAuthenticated,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/calculator/calculator.html'))
})
app.get('/project/tictactoe',isAuthenticated,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/tictactoe/index.html'))
})
app.get('/project/rps',isAuthenticated,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/rps/rps.html'))
})
app.listen(PORT,()=>{
    console.log('Server has been executed')
})