const express = require('express');
const morgan = require('morgan');
const app=express();

app.set('view engine', 'ejs');


// app.use((req,res,next)=>{
//     console.log(`${req.method} request for '${req.url}'`);
//     next();
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/',(req,res)=>{
   res.render('index', { title: 'Home Page' });
});

app.post('/post-form-data',(req,res)=>{
    console.log(req.body);
    res.send('data recieved')
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/')
});

app.get('/home',(req,res)=>{
   req.params.name = 'Home Page';
   res.send(`User: ${ req.params.name},`);
});

app.get('/about',(req,res,next) =>{
    const a=5;
    const b=10;
    console.log(a+b);
    next();
},(req,res)=>{
    res.send({msg:"it is in about page"});
});
app.get('/profile',(req,res)=>{
    res.send({msg:"it is in profile page"});
});
app.get('/contact',(req,res)=>{
    res.send({msg:"Welcome to the contact page"});
}); 