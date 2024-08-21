-- ADDED SEED DEPARTMENTS
INSERT INTO departments (name) VALUES ('Sales'), ('Engineering'), ('HR');

--ADDED SEED ROLES
INSERT INTO roles (title, salary, department_id) VALUES
('Sales Manager', 80000, (SELECT id FROM departments WHERE name = 'Sales')),
('Sales Associate', 60000, (SELECT id FROM departments WHERE name = 'Sales')),
('Lead Enginieer', 200000, (SELECT id FROM departments WHERE name = 'Engineering')),
('Software Engineer', 120000, (SELECT id FROM departments WHERE name = 'Engineering'));

--ADDED SEED EMPLOYEES 
INSERT INTO employees (first_name, last_name, role_id) VALUES
('Mary', 'Jane', (SELECT id FROM roles WHERE title = 'Sales Manager')),
('Peyton', 'Sawyer', (SELECT id FROM roles WHERE title = 'Sales Associate')),
('Bryce', 'Ferguson', (SELECT id FROM roles WHERE title = 'Sales Associate')),
('Richard', 'Brown', (SELECT id FROM roles WHERE title = 'Software Engineer')),
('CJ', 'Rodrigues', (SELECT id FROM roles WHERE title = 'Lead Engineer'));
