//allows us to use MySQL
var mysql = require("mysql")

//allows us to use the npm package inquirer
//which will let us prompt the user with questions
var inquirer = require("inquirer")

//lets us you the npm package console.table
var cTable = require('console.table');

//creates connection to MySQL
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "hu8b)HF(pyHP&TZ#vprONptaG7oHd9",
    database: "employee_db"
  });




//attempts to connect us to our established PORT
connection.connect(function(err) {
    //throws error if we can not get connected to port
    if (err) throw err;

    console.log("connected as id" + connection.threadId);
    startProgram();
})


//a function that uses the console.table npm package to all us to display the
//database information to the user in the command prompt
function showtable () {
    console.table()
}

//A function that starts the inquirer prompt
function startProgram() {
    console.log("Starting application")

}







