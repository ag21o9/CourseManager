const express = require('express')
const app = express();
const userroute = require('./routes/user.js');
const adminroute = require('./routes/admin.js');
const connect = require('./middlewares/connect.js');

connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/admin',adminroute);
app.use('/user',userroute);

app.use((err,req,res,next)=>{
    res.send("err page")
})

app.listen(3000,()=>{
    console.log('App Listenting on port 3000');
})
