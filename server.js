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
    if (err) {throw err};

    // console.log("connected as id" + connection.threadId);
    // showTable();
    startProgram();
})

//A function that starts the inquirer prompt
function startProgram() {
    // console.log("Starting application")
    //inquirer prompt
    inquirer
        .prompt([
            {
                name: "start",
                type: "list",
                message: "What would you like to Do?",
                choices:["View All Employees","View All Roles","View All Departments","Add an Employee","Add a Role","Add a Department","Exit"]
            }
        ]).then(function(answer){
            // console.log(answer)
            switch (answer.start) {
            case "View All Employees":
                // showEmployee();
                showAll("employee")
                break;
            case "View All Roles":
                showAll("roles")
                break;
            case "View All Departments":
                showAll("department")
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Update a Role":
                // updateRole();
                break;
            case "Exit":
                connection.end();
            }
        });
}

//a function that uses the console.table npm package to all us to display the
//database information to the user in the command prompt
function showAll (table) {
    // console.table()
    // console.log("It works Europia!");
    connection.query(
        "SELECT * FROM " + table, function(err, res) {
            if (err) {throw err}
           
            //shows our database in a table in the console
            console.table(res);
            startProgram();
        })}

//function that allows us to add a new employee from the command line
function addEmployee () {
    inquirer
        .prompt([
            {
                name:"firstName",
                type:"input",
                message:"What is the employee's first name?"
            },
            {
                name:"lastName",
                type:"input",
                message:"What is the employee's last name?"
            },
            {
                name:"roleId",
                type:"input",
                message:"What is the employee's role id?"
            },
            {
                name:"managerId",
                type:"input",
                message:"What is the employee's manager id?"
            },
        ]).then(function(answer) {
            // console.log(answer)
            connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: answer.roleId,
                        manager_id: answer.managerId
                    },
                    function(err) {
                        if (err) {throw err};
                        console.log("Your table was created successfully!");
                        startProgram();
                      }
                
            )

        })

}

function addRole () {
    inquirer
        .prompt([
            {
                name:"title",
                type:"input",
                message:"What is the title of the role?"
            },
            {
                name:"salary",
                type:"input",
                message:"How much do they make?"
            },
            {
                name:"departmentId",
                type:"input",
                message:"What is the role's department id?"
            }
        ]).then(function(answer) {
            // console.log(answer)
            connection.query(
                    "INSERT INTO roles SET ?",
                    {
                        title: answer.title,
                        salary: answer.salary,
                        department_id: answer.departmentId
                    },
                    function(err) {
                        if (err) {throw err};
                        console.log("Your table was created sucessfully ")
                        startProgram();
                    }
            )

        })

}

function addDepartment () {
    inquirer
        .prompt([
            {
                name:"name",
                type:"input",
                message:"What is the name of the department?"
            },
        ]).then(function(answer) {
            // console.log(answer)
            connection.query(
                    "INSERT INTO department SET ?",
                    {
                        name: answer.name
                    },
                    function(err) {
                        if (err) {throw err};
                        console.log("Your table was created sucessfully ")
                        startProgram();
                    }
            )

        })

}

// function updateRole ();