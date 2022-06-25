const { query } = require('express');
const express = require('express');

const mysql = require('mysql2');

let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
    port: 3306
};

const con = mysql.createConnection(dbparams);
const app = express();

app.use(express.static("sf")) ;

app.get("/acc",(req,resp)=>{

let acno = req.query.acno;

    console.log("talking to databse taht can be done later on");

   let output = { status:false ,detail:{acno:1 , balance:10000} };

    //here pt the database part
con.query('select * from bank where acno = ?' , [acno] ,(err , rows) =>{
    if(err)
    {
        console.log("error has occured")
    }
    else{
        if(rows.length > 0)
        {
            output.status = true ;
            output.detail=rows[0];
            console.log("inside else of query");
           // loginstatus.message = "pincode succesful";
        }
    }
    resp.send(output);
});



});






app.listen(900, function () {
    console.log("server listening at port 8081...");
});
