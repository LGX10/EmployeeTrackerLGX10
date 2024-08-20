
SELECT 
    e.id AS employee_id,
    e.first_name,
    e.last_name,
    r.title AS role_title,
    r.salary,
    d.name AS department_name,
    CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM 
    employee e
JOIN 
    role_names r ON e.role_id = r.id
JOIN 
    department d ON r.department_id = d.id
LEFT JOIN 
    employee m ON e.manager_id = m.id;


