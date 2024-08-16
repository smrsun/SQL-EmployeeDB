const inquirer = require('inquirer')
const {Client} = require('pg')

const client = new Client ({
    user:'username',
    host: 'localhost',
    database: 'employee_db',
    password: 'password',
    PORT: 3001,
});

client.connect();

async function main() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
        ],
    });
   
    
}

async function viewAllDepartments() {
   
}