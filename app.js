const express = require('express')
const courseroute = require('./routes/course.js');
const adminroute = require('./routes/admin.js');
const connect = require('./middlewares/connect.js');
const cookie = require('cookie-parser');

const app = express();
connect();


app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/admin',adminroute);
app.use('/user',courseroute);

app.use((err,req,res,next)=>{
    res.send(err.message);
})

app.listen(3000,()=>{
    console.log('App Listenting on port 3000');
})
