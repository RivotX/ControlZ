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

app.listen(8081, () => {
    console.log("servidor corriendo...");
})

