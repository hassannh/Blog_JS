const mysql = require('mysql2/promise');
const app = require('../app');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



// Function to check the database connection
async function checkDatabaseConnection() {
    try {
        
        const connection = await pool.getConnection();
        console.log('Database connected successfully');
        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}


checkDatabaseConnection();




