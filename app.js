
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let teamMember = [];


CreateEmployees();

 function CreateEmployees() 
{
    
    
         inquirer.prompt( 
            [
                {
                    type: "list",
                    name: "role",
                    message: "Which type of team member would you like to add?",
                    choices: [
                    "Manager",
                    "Engineer", 
                    "Intern", 
                    "I don't want to add anymore team members."]
                }
            ]).then (answer =>
                {
                     
                    switch(answer.role) {
                        case "Manager":
                            console.log(answer);
                            PromptManager();
                        break;
                    
                        case "Engineer":
                            PromptEngineer();
                        break;
                    
                        case "Intern":
                            PromptIntern();
                        break;
                    }
                })
    
} 



 function PromptManager()
{
      inquirer.prompt( 
        [
            {
                type: "input",
                name: "name",
                message: "What is your Manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your Manager's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your Manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your Manager's office number?"
            },
            
        ]
    ).then(function(answers){
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager)
        teamMember.push(manager)
        CreateEmployees()
    })
}

 function PromptEngineer()
{
     inquirer.prompt( 
        [
            {
                type: "input",
                name: "name",
                message: "What is your Engineer's name?"
              },
              {
                type: "input",
                name: "id",
                message: "What is your Engineer's id?"
              },
              {
                type: "input",
                name: "email",
                message: "What is your Engineer's email?"
              },
              {
                type: "input",
                name: "github",
                message: "What is your Engineer's GitHub ID?"
              },
              
        ]
    ).then(function(answers){
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
        teamMember.push(engineer)
        CreateEmployees()
    })
}

 function PromptIntern()
{
     inquirer.prompt( 
        [
            {
                type: "input",
                name: "name",
                message: "What is your Intern's name?"
              },
              {
                type: "input",
                name: "id",
                message: "What is your Intern's id?"
              },
              {
                type: "input",
                name: "email",
                message: "What is your Intern's email?"
              },
              {
                type: "input",
                name: "school",
                message: "What is your Intern's School name?"
              },
              
        ]
    ).then(function(answers){
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        console.log(intern)
        teamMember.push(intern)
        CreateEmployees()
    })
}
















        /*     

        .then(function(answers){
            let employeeData = answers
            if (answers.role === "Manager") {
                createManager(answers)
            }
            else if (answers.role === "Engineer") {
                createEngineer(answers)
            }
            else if (answers.role === "Intern") {
                createIntern(answers)
            }
        })

*/
        
    



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
