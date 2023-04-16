// Problem 1
let sam = {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raiseEligible: true,
  };
  
  let mary = {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raiseEligible: true,
  };
  
  let bill = {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raiseEligible: false,
  };
  
  // Problem 2
  let anna = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false,
  };
  
  let employees = [sam, mary, bill, anna];
  
  // Problem 3
  let totalSalary = employees.reduce((acc, employee) => {
    return acc + employee.salary;
  }, 0);
  
  console.log('Total salary for all employees:', totalSalary);
  
  // Problem 4
  function giveRaise(employee) {
    if (employee.raiseEligible) {
      employee.salary = employee.salary * 1.1;
      employee.raiseEligible = false;
    }
  }
  
  employees.forEach(giveRaise);
  
  console.log('Employees after raises:', employees);
  
  // Problem 5
  let workingFromHome = ['Anna', 'Sam'];
  
  employees.forEach(employee => {
    if (workingFromHome.includes(employee.firstName)) {
      employee.wfh = true;
    } else {
      employee.wfh = false;
    }
  });
  
  console.log('Employees after wfh update:', employees);