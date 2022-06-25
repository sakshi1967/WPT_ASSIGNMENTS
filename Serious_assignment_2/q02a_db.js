
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

let resourceid= 104;
let resourcename = 'tv';
let status = true;


con.query('insert into resource( resourceid , resourcename , status ) values (? , ? , ?) ', [resourceid , resourcename ,status] , (err , resp) => {
    if(err)
    {
        console.log(err);
        console.log("error has occured")
    }
    else
    {
        console.log(resp.affectedRows);
    }
})