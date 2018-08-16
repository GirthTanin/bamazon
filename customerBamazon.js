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

function exit() {
    connection.end();
}

function displayTable() {
    // console.log ("displayTable");
    connection.query("SELECT * FROM products", function (error, results) {
        if (error) throw error;
        console.log("Our deals of the day are: ");
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
        // I need to learn how to get the if statement to work or I need to delete the press q to quit.
        console.log("Please choose a deal!", "\n", "Or press q to quit.");
    sellStuff();
    });
}

function sellStuff() {
    inquirer.prompt([{
        type: "input",
        name: "item_id",
        message: "What deal would you enjoy? Please enter it's corresponding number."
    }]).then(function(answer) {
        var itemId = answer.item_id;
        // here I want an if statement to allow someone to exit if they want...
        if (itemId === 'q') {
            exit();
        } else {
            console.log(itemId + " is a great choice!");
            howMany(itemId);
            }
        });
    }

    function howMany(itemId) {
    inquirer.prompt([{
        type: "input",
        name: "quantity",
        message: "How many units of this deal would you like?"
    }
    ]).then(function(response){
        var quantity = response.quantity;
        console.log(quantity + " is the amount you desired.");
    orderGood(itemId, quantity);
    });
}


function orderGood(deal, quantity) {
    var yellow = "SELECT * FROM products WHERE item_id=" + deal;
    connection.query(yellow, function(error, response){
        if (error) throw error;
        var stock = parseInt(response[0].stock_quantity);
        var price = parseInt(response[0].price);
        if (stock <= quantity) {
            console.log("We're sorry, we have less than you were hoping for!");
            mainPitch();
        } else {
            buyStuff (deal, quantity, stock, price);
        }
    });
}

function buyStuff (deal, quantity, stock, price) {
    var newStock = stock - quantity;
    var yellow = "UPDATE products SET stock_quantity = " + newStock + " WHERE item_id = " + deal;
    connection.query(yellow, function(error, response) {
        if (error) throw error;
        var total = quantity * price;
        console.log("Your total amount to be paid is: " + total);
        mainPitch();
        });
    }

function mainPitch() {
    inquirer.prompt([{
        type: "confirm",
        name: "again",
        message:"Is that all you can DEAL with today?    get it?!   ha!, \n, Would you like to shop some more?"
    }]).then(function(response) {
        console.log(response);
        if (response.restart === true) {
            displayTable();
        } else {exit();}
    });
}
