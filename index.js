const express = require('express');
const morgan = require('morgan');
const app=express();
const userModel = require('./models/user.js');
const connection = require('./config/db.js');


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
   res.render('user', { title: 'Home Page' });
});

app.post('/post-form-data',(req,res)=>{
    console.log(req.body);
    res.send('data recieved')
});

app.get('/users',(req,res)=>{
    res.send("req.query: " + JSON.stringify(req.query));
    });

// 

app.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
    const newUser=await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send(newUser);
});
        
app.get('/get-users',  (req, res) => {
    // userModel.find({username:"bala"})
    //     .then(users => {
    //         res.send(users);
    //     })
    //     .catch(err => {
    //         console.error('Error fetching users:', err);
    //         res.status(500).send('Internal Server Error');
    //     });
    userModel.findOne({
        username: "bala"
    }).then(user => {
        console.log(user);
            res.send(user);
        
    })
});

app.get('/update-users',async (req, res) => {
    await userModel.findOneAndUpdate({
        username: "bala"
    },{
        email:"bala11@g.com"
    })
    res.send({
        msg:"User updated successfully"
    });
});

app.get('/delete-users',async (req, res) => {
    await userModel.findOneAndDelete({  
        username: "bala"
    })  
    res.send({
        msg:"User deleted successfully"
    });
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