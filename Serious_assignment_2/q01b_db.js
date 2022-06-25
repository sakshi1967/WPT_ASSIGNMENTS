
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
//ii.	Update  -- category and price
let itemno=5;
let price = 455;
let category ='brand';

con.query('update item set price = ? ,category = ? where itemno = ? ', [price,category ,itemno] , (err , resp) => {
    if(err)
    {
        console.log("error has occured")
    }
    else
    {
        if(resp.affectedRows === 0)
        {

            console.log(resp.affectedRows);
        }
        else
        {
            console.log("update succees")
        }
    }
})