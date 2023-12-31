const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts)
//extract style and scripts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');


app.listen(port, function(err){
    if(err){
//console.log('Error',err);
console.log(`Error in running server:${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});