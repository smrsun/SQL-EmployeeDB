-- ADDED SEED DEPARTMENTS
INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('HR');

--ADDED SEED ROLES
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager' 80000, (SELECT id FROM department WHERE name = 'Sales')),
('Sales Associate', 60000, (SELECT id FROM department WHERE name = 'Sales')),
('Lead Enginieer', 200000, (SELECT id FROM department WHERE name = 'Engineering'))
('Software Engineer', 120000, (SELECT id FROM department WHERE name = 'Engineering'));

--ADDED SEED EMPLOYEES 
INSERT INTO employee (first_name, last_name, role_id) VALUES
('Mary', 'Jane', (SELECT id FROM role WHERE title = 'Sales Manager')),
('Peyton', 'Sawyer', (SELECT id FROM role WHERE title = 'Sales Associate')),
('Bronson', 'Ferguson', (SELECT id FROM role WHERE title = 'Sales Associate')),
('Richard', 'Brown', (SELECT id FROM role WHERE title = 'Software Engineer')),
('CJ', 'Rodrigues', (SELECT id FROM role WHERE title = 'Lead Engineer'));
