
let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
    port: 3306
};

const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);

let itemno= 5;
let itemname = 'mamaearth';
let price = 300;
let category ='shampoo';

con.query('insert into item( itemno , itemname , price, category) values (? , ? , ? , ?) ', [itemno,itemname,price,category] , (err , resp) => {
    if(err)
    {
        console.log("error has occured")
    }
    else
    {
        console.log(resp.affectedRows);
    }
})