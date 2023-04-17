// Problemo 1
let employee = '{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech" , "Designation":"Manager", "Salary":"40000", "Raise Eligible":"true" },' +
'{ "firstName":"Mary" , "department":"Finance" , "Designation":"Trainee", "Salary":"18500", "Raise Eligible":"true" },' +
'{ "firstName":"Bill" , "department":"HR" , "Designation":"Executive", "Salary":"21200", "Raise Eligible":"false" } ]}';
let obj = JSON.parse(employee);
console.log("Problem 1")
console.log(obj); 



//Problemo 2
let company = '{ "company" :[' +
'{ "companyName": "Tech Stars" , "website": "www.techstars.site" } ]}';
'{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech" , "Designation":"Manager", "Salary":"40000", "Raise Eligible":"true" },' +
'{ "firstName":"Mary" , "department":"Finance" , "Designation":"Trainee", "Salary":"18500", "Raise Eligible":"true" },' +
'{ "firstName":"Bill" , "department":"HR" , "Designation":"Executive", "Salary":"21200", "Raise Eligible":"false" } ]}';
const obj2 = JSON.parse(company);
console.log("Problem 2")
console.log(obj2); 



//Problemo 3
let newEmployee = '{ "employees" : [' +
'{ "firstName":"Anna" , "department":"Tech" , "Designation":"Executive", "Salary":"25600", "Raise Eligible":"false" }]}';
obj2.company.employees.push(obj3.newEmployee[0]);
console.log("Problem 3")
console.log(obj3); 



//Problemo 4
let totalSalary = 0;
for (let i = 0; i < obj2.company.employees.length; i++) {
  totalSalary += parseInt(obj2.company.employees[i].Salary);
}
console.log("Problem 4");
console.log(`Total salary for all employees: ${totalSalary}`);



//Problemo 5
function giveRaise(companyObj) {
  const employees = companyObj.company.employees;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i]["Raise Eligible"] === "true") {
      employees[i].Salary = parseInt(employees[i].Salary) * 1.1;
      employees[i]["Raise Eligible"] = "false";
    }
  }
  return companyObj;
}
console.log("Problem 5");
console.log(`Before giving raise: ${JSON.stringify(obj2)}`);
console.log(`After giving raise: ${JSON.stringify(giveRaise(obj2))}`);



//Problemo 6
const wfhEmployees = ["Anna", "Sam"];
for (let i = 0; i < obj2.company.employees.length; i++) {
  const name = obj2.company.employees[i].firstName;
  obj2.company.employees[i].wfh = wfhEmployees.includes(name);
}
console.log("Problem 6");
console.log(`Updated company JSON: ${JSON.stringify(obj2)}`);