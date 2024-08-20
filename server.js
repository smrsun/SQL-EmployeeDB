const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool({
    user: 'username',
    password: 'password',
    host:'localhost',
    database: 'employee_db'
   
},
console.log(`Connected to Employee Database`));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

module.exports = pool;