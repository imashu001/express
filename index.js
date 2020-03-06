const express = require('express');
const app = express();
const port = 1703;


app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in loading server : ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});
