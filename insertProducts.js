let mysql  = require('mysql');

let config = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "student123",
    database: "sys"
});

config.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO products (id, name, description, prGroup, price, rating) VALUES ?";
    var values = [
        [1,'Carmen Gran Reserva Cabernet Sauvignon','Red Wine',00,17.99,5],
        [2,'Domaine Loubejac Pinot Noir Willamette Valley','White Wine',00,19.99,5],
        [3,'Uro Toro La Enfermera Tempranillo','White Wine',00,9.99,5],
        [4,'Skatterbrain Dark Chocolate Banana Whiskey','Whiskey',02,18.99,5],
        [5,'El Padrino Blanco Tequila','Tequila',02,25.99,5],
        [6,'Dalmore 12 Year Sherry Cask Select','Sherry',02,79.99,5],
        [7,'Weihensteophaner Hefe Weissibier','Beer',01,10.99,5],
        [8,'Bud Light Seltzer Fall Flannel Pack	1','Seltzer',01,14.99,5],
        [9,'Sapporo Premium Beer','Beer',01,7.99,5],
        [10,'Athletic Non-Alcoholic Upside Dawn','Non-Alcoholic',03,9.99,5],
        [11,'Heineken 0.0','Non-Alcoholic',03,7.99,5],
        [12,'Clausthaler Dry Hopped Non-Alcoholic Beer','Non-Alcoholic',03,6.99,5]
    ];
    config.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});