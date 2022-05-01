const express = require('express');
const mongoose = require('mongoose');
const ejs= require('ejs')
const router = require('./routes/home')

const path = require('path')
const app = express();

//middleware to read the json object/file
app.use(express.json());


//middleware to read the ejs/HTML file
app.use(express.urlencoded({extended:false}));

const dotenv=require('dotenv');

dotenv.config();



//set the template engine as ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', router);



//connecting the node js with mongodB
mongoose
.connect(process.env.MONGO_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
   console.log('MongoDB connected')
}).catch(err=>{
    console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log('Server', `${process.env.PORT}`)
});
