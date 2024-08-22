-- ADDED SEED DEPARTMENTS
INSERT INTO departments (name) VALUES ('Sales'), ('Engineering'), ('HR');

--ADDED SEED ROLES
INSERT INTO roles (title, salary, departments_id) VALUES
('Sales Manager', 80000, 1),
('Sales Associate', 60000, 1),
('Lead Engineer', 200000, 2),
('Software Engineer', 120000, 2);

--ADDED SEED EMPLOYEES 
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Mary', 'Jane', 1, NULL),
('Peyton', 'Sawyer', 2, 1),
('Bryce', 'Ferguson', 2, 1),
('Richard', 'Brown', 4, 3),
('CJ', 'Rodrigues', 3, NULL);
