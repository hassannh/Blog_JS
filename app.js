const express = require('express');
const app = express();
const port = 5000;
const ejs = require('ejs'); // Import the 'ejs' module






// Set the view engine to EJS
app.set('view engine', 'ejs'); // Set the view engine to 'ejs'


console.log(ejs);




app.get('/', (req, res) => {

    console.log(res);
    res.render('index');
    console.log(res);
});

app.listen(port, () => console.log(`The app is running on port ${port}`));
