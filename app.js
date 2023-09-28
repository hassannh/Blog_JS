
const express = require('express');
const path = require('path');

const postController = require('./Controller/post');
const postsRouter = require('./Routes/post');




// const routes = require('./Routes/route')


const app = express();
const port = 5000;






app.set('views',path.join(__dirname ,'views'))
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
   
    res.render('index');
});



app.get('/post', (req, res) => {
   
    res.render('post');
});


app.get('/category', (req, res) => {
   
    res.render('category');
});




app.listen(port, () => console.log(`The app is running on port ${port}`));



module.exports = app;