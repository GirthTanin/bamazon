var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("easy-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(error) {
    if (error) throw error;
    displayTable();
});

var inventoryID = [];
var chosenDeal = -1;
var newInventory = 0;

function displayTable() {
    // console.log ("displayTable");
    connection.query("SELECT * FROM products", function (error, results) {
        if (error) throw error;
        console.log("Our deals of the day are: ")
        // console.log(results);

        // Here I tried to get ES6 to work, but never could get the syntax correct...
        // for (i = 0; i < results.length; i++) {
        //     inventoryID.push(results[i].item_id);
        //     console.log(` ${results[i].item_id} ==|> ${results[i].product_name}: ${results[i].price`);

        var t = new Table;
        results.forEach(function(product) {
            t.cell("Item", product.item_id);
            t.cell("Product", product.product_name);
            t.cell("Department", product.department_name);
            t.cell("Price", product.price, Table.number(2));
            t.newRow();
        });
        console.log(t.toString());

        // inquirer.prompt([{
        //     type: "input"
        //     name: "item_id"
        // }])

        });
        // console.log("");
    }
