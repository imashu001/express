const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeal_development');
const db = mongoose.connection;


db.on('error',console.error.bind(console,"Error connecting to moongodb"));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');

});
module.exports= db;