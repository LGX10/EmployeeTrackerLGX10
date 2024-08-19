INSERT INTO departnment (name)
VALUES ('Human Resources'),
       ('Accounting'),
       ('Marketing'),
       ('Sales'),
       ('Software Engineering');

INSERT INTO role_names (title, salary, department_id)
VALUES ('Lead Dev', 100000.00, 5),
       ('Senior Engineer', 90000.00, 5),
       ('Junior Engineer', 70000.00, 5),
       ('Sales Representative', 60000.00, 4),
       ('Mid Level Engineer', 80000.00, 5),
       ('Social Media Marketing', 55000.00, 3),
       ('Marketing Analyst', 65000.00, 3),
       ('CPA', 75000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nathanael', 'Hoffman', 1, NULL),
       ('Junaid', 'Mullen', 2, 1),
       ('Megan', 'Downs', 3, 2),
       ('Aled', 'Grant', 4, NULL),
       ('Leland', 'Norton', 5, 1),
       ('Gordon', 'Osborne', 6, NULL),
       ('Jannat', 'Ortiz', 7, 6),
       ('Libbie', 'Maxwell', 8, NULL);

