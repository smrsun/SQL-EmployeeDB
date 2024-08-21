const inquirer = require('inquirer');
const queries = require('./queries');


const start = async () => {
  const answers = await inquirer.prompt({
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
  switch (answers.action) {
    case 'View all departments':
      const departments = await queries.viewDepartments();
      break;

    case 'View all roles':
      const roles = await queries.viewRoles();
      break;

    case 'View all employees':
      const employees = await queries.viewEmployees();
      break;

    case 'Add a department':
      const { departmentName } = await inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Enter name of the department you would like to add to',
      });
      await queries.addDepartment(departmentName);
      console.log('Department has been added');
      break;

    case 'Add a role':
      const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the role title',
        },
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the salary',
        },
        {
          type: 'input',
          name: 'departmentId',
          message: 'Enter department ID for this role',
        },
      ]);
      await queries.addRole(roleTitle, roleSalary, departmentId);
      console.log('Role has been added');
      break;

    case 'Add an employee':
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'Enter the employee first name:',
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'Enter the employee last name:',
        },
        {
          type: 'input',
          name: 'roleId',
          message: 'Enter the role ID for the employee:',
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'Enter the manager ID (if applicable):',
          default: null,
        },
      ]);
      await queries.addEmployee(firstName, lastName, roleId, managerId);
      console.log('Employee added.');
      break;

    case 'Update an employee role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'employeeId',
          message: 'Enter the employee ID being updated',
        },
        {
          type: 'input',
          name: 'newRoleId',
          message: 'Enter the updated role ID',
        },
      ]);
      await queries.updateEmployeeRole(employeeId, newRoleId);
      console.log('New employee role updated.');
      break;

    default:
      console.log('Invalid action selected');
  }
  await start();
};
  start();



