import * as inquirer from 'inquirer';
import pool from './connection';
import {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} from './queries';

const mainMenu = async () => {
  const questions = [
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee Role',
        'Exit',
      ],
    },
  ];

  const { action } = await inquirer.(questions);

  switch (action) {
    case 'View All Departments':
      await viewAllDepartments();
      break;
    case 'View All Roles':
      await viewAllRoles();
      break;
    case 'View All Employees':
      await viewAllEmployees();
      break;
    case 'Add Department':
      await addDepartment();
      break;
    case 'Add Role':
      await addRole();
      break;
    case 'Add Employee':
      await addEmployee();
      break;
    case 'Update Employee Role':
      await updateEmployeeRole();
      break;
    case 'Exit':
      pool.end();
      return;
  }

  mainMenu();  // Restart the menu after an action is completed
};

mainMenu().catch((err) => console.error(err));





