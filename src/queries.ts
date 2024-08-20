import pool from './connection';

export const viewAllDepartments = async () => {
    try {
        const result = await pool.query('SELECT * FROM department');
        console.table(result.rows);
    } catch (err) {
        console.error('Error viewing departments:', err);
    }
};

export const viewAllRoles = async () => {
    try {
        const result = await pool.query(`
            SELECT role.id, role.title, department.name AS department, role.salary
            FROM role
            JOIN department ON role.department_id = department.id
        `);
        console.table(result.rows);
    } catch (err) {
        console.error('Error viewing roles:', err);
    }
};

export const viewAllEmployees = async () => {
    try {
        const result = await pool.query(`
            SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
            CONCAT(manager.first_name, ' ', manager.last_name) AS manager
            FROM employee
            JOIN role ON employee.role_id = role.id
            JOIN department ON role.department_id = department.id
            LEFT JOIN employee AS manager ON employee.manager_id = manager.id
        `);
        console.table(result.rows);
    } catch (err) {
        console.error('Error viewing employees:', err);
    }
};

export const addDepartment = async () => {
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:',
        },
    ]);

    try {
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log(`Department "${name}" added successfully.`);
    } catch (err) {
        console.error('Error adding department:', err);
    }
};

export const addRole = async () => {
    const { title, salary, department_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:',
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department ID for the role:',
        },
    ]);

    try {
        await pool.query(
            'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
            [title, salary, department_id]
        );
        console.log(`Role "${title}" added successfully.`);
    } catch (err) {
        console.error('Error adding role:', err);
    }
};

export const addEmployee = async () => {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee:',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee:',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role ID for the employee:',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager ID for the employee (or leave blank if none):',
        },
    ]);

    try {
        await pool.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [first_name, last_name, role_id, manager_id || null]
        );
        console.log(`Employee "${first_name} ${last_name}" added successfully.`);
    } catch (err) {
        console.error('Error adding employee:', err);
    }
};

export const updateEmployeeRole = async () => {
    const { employee_id, role_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter the ID of the employee you want to update:',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the new role ID for the employee:',
        },
    ]);

    try {
        await pool.query(
            'UPDATE employee SET role_id = $1 WHERE id = $2',
            [role_id, employee_id]
        );
        console.log(`Employee with ID "${employee_id}" updated successfully.`);
    } catch (err) {
        console.error('Error updating employee role:', err);
    }
};
