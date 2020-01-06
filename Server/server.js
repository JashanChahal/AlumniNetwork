var config = require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');
const hbs = require('hbs');
const path = require('path');

const {user} = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Alumini");
mongoose.connection.on('connected',()=>{
    console.log('connected');
})
const app = express();
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Headers','*')
    next();
})
app.set('view engine','hbs');
app.use('/static', express.static(path.join(__dirname, 'views')));

app.get('/',(req,res) => {
  res.render('../../views/index.hbs');
});

//hsdbvjh

app.post('/add',(req,res) => {
    console.log(req);
   var body = _.pick(req.body,['userName','password']);
   var newUser = new user(body);

   newUser.save().then(() => {
       console.log('Check database');
       res.send(newUser);
   },(e) => {
       res.sendStatus(400).send(e);
   });
});

app.post('/check',(req,res) => {
    
     user.findOne({userName:req.body.userName,password:req.body.password}).then((user1) => {
       if(!user1)
       {
           res.sendStatus(404).send("No user found");
       }else{
           res.send(user1);
       }
     });

});

app.listen(3002,() => {
    console.log(`Server is up on port ${3002}`);
});