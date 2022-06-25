
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
//iii.	Multi select – query on category

let category ='shampoo';

con.query('select * from item where category = ? ', [category] , (err , rows) => {
    if(err)
    {
        console.log("error has occured")
    }
    else
    {
        if( rows.length >  0)
        {
            for( let i=0; i < rows.length ; i ++)
            console.log(rows[i].itemno + " " +rows[i].itemname + " " + rows[i].price + " " + rows[i].category);
        }
        else
        {
            console.log("no item found with this "+ category);
        }
    }
})