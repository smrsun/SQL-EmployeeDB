const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: `@Ihavegr8kid$!`,
  host: 'localhost',
  database: 'employee_db',
  port: 5432,
});

pool.connect();

const viewDepartments = async () => {
  const res = await pool.query('SELECT * FROM departments');
  console.log(res.rows)
  return res.rows;
};

const viewRoles = async () => {
  const res = await pool.query(`SELECT * FROM roles`);
  console.log(res.rows)
  return res.rows;
};

const viewEmployees = async () => {
  const res = await pool.query(`SELECT * FROM employees`);
  console.log(res.rows)
  return res.rows;

};

const addDepartment = async (name) => {
  const res = await pool.query('INSERT INTO departments (name) VALUES ($1)', [name]);
  return res.rows[0];
};

const addRole = async (title, salary, department_id) => {
  const res = await pool.query(
    'INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)',
    [title, salary, department_id]
  );
  return res.rows[0];
};

const addEmployee = async (first_name, last_name, role_id, manager_id) => {
  const res = await pool.query(
    'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
    [first_name, last_name, role_id, manager_id]
  );
  return res.rows[0];
};

const updateRole = async (employee_id, new_role_id) => {
  try {
    const res = await pool.query(
      `UPDATE employees SET role_id = $1
        WHERE id = $2`,
      [new_role_id, employee_id]
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
  updateRole,
};
