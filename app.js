const express = require('express');
const app = express();
const port = 5000;
 // Import the 'ejs' module




app.set('view engine', 'ejs'); // Set the view engine to 'ejs'




app.get('/', (req, res) => {

   
    res.render('index');
    console.log(res);
});

app.listen(port, () => console.log(`The app is running on port ${port}`));
