const viewDepartments = async () => {
    const res = await pool.query('SELECT * FROM department');
    return res.rows;
};

const viewRoles = async () => {
    const res = await pool.query(
        `SELECT role.id, role.title, role.salary, 
        department.name AS department FROM role
     JOIN department ON role.department_id = department.id`)

    return res.rows;
};

const viewEmployees = async () => {
    const res = await pool.query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title AS 
        job_title, department.name AS department, role.salary, emaployee.manager_id
        FROM employee JOIN role ON employee.role_id = role.id 
        JOIN department ON role.department_id = department.id`, 
    );
    return res.rows;
};

const addDepartment = async (name) => {
    const res = await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
    return res.rows[0];
};
        
const addRole = async (title, salary, department_id) => {
    const res = await pool.query(
        'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
        [title, salary, department_id]
    );
    return res.rows[0];
};

const addEmployee = async (first_name, last_name, role_id, manager_id) => {
    const res = await pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      [first_name, last_name, role_id, manager_id]
    );
    return res.rows[0];
  };
  
  const updateRole = async (employee_id, new_role_id) => {
      try {
        const res = await pool.query(
        `UPDATE employee SET role_id = $1
        WHERE id = $2`, [new_role_id, employee_id]
      );
      return res.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
  };

  module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateRole
  };