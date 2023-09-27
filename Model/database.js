import mysql from 'mysql2';
import app from '../app';



console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'root',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

app.get('/', async (req, res) => {
    try {
        // Fetch data from your MySQL database here
        const [rows, fields] = await pool.query('SELECT * FROM post');

        res.render('index', { data: rows });
        console.log(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// If you need to close the connection pool, you can do so when your app exits
process.on('exit', () => {
    pool.end();
});

// Handle other routes and configurations as needed
