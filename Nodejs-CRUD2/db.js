const { Pool } = require('pg');


const pool = new Pool({

  user: 'postgres',     // Replace with your PostgreSQL username

  host: 'localhost',         // Replace with your PostgreSQL server host

  database: 'postgres', // Replace with your PostgreSQL database name

  password: 'kousay', // Replace with your PostgreSQL password

  port: 5432,                // Replace with your PostgreSQL port (default is 5432)

});


module.exports = pool;