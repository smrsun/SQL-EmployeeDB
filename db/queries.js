const { __asyncValues } = require("tslib");

const viewDepartments = async () => {
    const res = await pool.query('SELECT * FROM department');
    return res.rows;
};

const viewRoles = async () => {
    const res = await pool.query(
        `SELECT role.id, role.title, role.salary, 
        department.name AS department FROM role
     WHERE role.department_id = department.id`)

    return res.rows;
};

const view Employees = async () => {
    const res = await pool.query(
        `SELECT employee.id, employee.first_name, employee.last_name`, 
    );
    return res.rows;
};

const addDepartment = async (name) => {
    const res = await pool.query('INSERT INTO department (name)VALUES', [name]),
    return res.rows[0];
};
        
const addRole = async (title, salary, department_id) => {
    const res = await pool.query(
        'INSERT INTO role (title, salary, department_id) VALUES',
        [title, salary, department_id]
    );
    return res.rows[0];
};

const addEmployee = async (first_name, last_name, role_id, manager_id) => {
    const res = await pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES',
      [first_name, last_name, role_id, manager_id]
    );
    return res.rows[0];
  };
  
  const updateRole = async (employee_id, new role_id) => {
    
  }