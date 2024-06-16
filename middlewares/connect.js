var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/courses';

async function connect(){
    const connection = await mongoose.connect(mongoDB);
    console.log('Connection Successfull with : ');
    console.log(connection.connection.host);
    console.log(connection.connection.name);
}

module.exports = connect;