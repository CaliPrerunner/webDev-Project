var mysql = require('mysql'); 

//credentials into config file for the localhost mysql server
let config = {
    host: "127.0.0.1",
    port: '3306',
    user: 'root',
    password: 'student123',
    database: 'sys'
};
//export those credentials
module.exports = config;

//open connection to mySQL db 'sys' where our website DB is
let con = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "student123",
    database: "sys"
});

//function for successful connection to mySQL server, used for testing
con.connect(function(err) {
    if (err) {
    return console.error('error' + err.message);
    }
    console.log("Connected to MySQL server!");
});

//function for closing connection to mySQL
con.end(function(err) {
    if (err) {
    return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
});

/** 
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
 
    con.query("CREATE DATABASE mydb", function(err, result ) {
        if (err) throw (err);
        console.log("Database created, creating TABLE products");
    });
    var products = "CREATE TABLE products (name VARCHAR(64), description VARCHAR(255), price INT(10), inventory INT(100), modifier BOOLEAN)";
    con.query(products, function(err, result){
        if (err) throw err;
        console.log("");
    });
});
*/