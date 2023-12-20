import express from 'express';
import mysql from 'mysql';


const app = express();
app.use(express);

const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios',
})

app.listen(5175, () => {
    console.log("servidor corriendo...");
})

