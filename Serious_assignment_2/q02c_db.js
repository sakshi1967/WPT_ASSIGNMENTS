
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
//	Single select  -- query on resourceid.

let resourceid = 102;


con.query('select * from resource where resourceid = ?', [resourceid] , (err , rows) => {
    if(err)
    {
        console.log(err);
        console.log("error has occured")
    }
    else
    {
        if( rows.length >  0)
        {
            for( let i=0; i < rows.length ; i ++)
            console.log(rows[i].resourceid + " " +rows[i].resourcename + " " + rows[i].status );
        }
        else
        {
            console.log("no item found with this "+ resourceid);
        }
    }
})