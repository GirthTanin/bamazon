var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("easy-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(error) {
    if (error) throw error;
    start();
});

var inventoryID = [];
var chosenDeal = -1;
var newInventory = 0;

function start() {
    // console.log ("the start function");
    connection.query("SELECT item_id, product_name, price FROM products", function (error, results) {
        if (error) throw error;
        console.log("Today our deals of the day are: ");
        console.log(results);
        // for (i = 0; i < results.length; i++) {
        //     inventoryID.push(results[i].item_id);
        //     console.log(` ${results[i].item_id} ==|> ${results[i].product_name}: ${results[i].price`);
        });
        // console.log("");
    }
