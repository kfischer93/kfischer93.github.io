// Problemo 1
let employee = '{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech" , "Designation":"Manager", "Salary":"40000", "Raise Eligible":"true" },' +
'{ "firstName":"Mary" , "department":"Finance" , "Designation":"Trainee", "Salary":"18500", "Raise Eligible":"true" },' +
'{ "firstName":"Bill" , "department":"HR" , "Designation":"Executive", "Salary":"21200", "Raise Eligible":"false" } ]}';
let obj = JSON.parse(employee);
console.log("Problem 1");
console.log(obj); 


//Problemo 2
let company = '{ "company" :[' +
'{ "companyName": "Tech Stars" , "website": "www.techstars.site" } ]}';
'{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech" , "Designation":"Manager", "Salary":"40000", "Raise Eligible":"true" },' +
'{ "firstName":"Mary" , "department":"Finance" , "Designation":"Trainee", "Salary":"18500", "Raise Eligible":"true" },' +
'{ "firstName":"Bill" , "department":"HR" , "Designation":"Executive", "Salary":"21200", "Raise Eligible":"false" } ]}';
const comp = JSON.parse(company);
comp['employees'] = obj ['employees'];
console.log("Problem 2");
console.log(comp); 


//Problemo 3
console.log("Problem 3");
obj["employees"].push ({firstName: "Anna" , department: "Tech" , Designation: "Executive", Salary: "25600", RaiseEligible: "false"});
console.log(obj); 


//Problemo 4
console.log("Problem 4");
let totalSalary = 0;
for (let i = 0; i < comp["employees"].length; i++) {
  totalSalary += parseInt(comp["employees"][i]["Salary"]);
}
console.log(`Total salary for all employees: ${totalSalary}`);


//Problemo 5
console.log("Problem 5");
function giveRaise(companyObj) {
  const employees = companyObj["employees"];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i]["Raise Eligible"] === "true") {
      employees[i]["Salary"] = parseInt(employees[i]["Salary"]) * 1.1;
      employees[i]["Raise Eligible"] = "false";
    }
  }
  return companyObj;
}
console.log(`Before giving raise: ${JSON.stringify(comp)}`);
console.log(`After giving raise: ${JSON.stringify(giveRaise(comp))}`);



//Problemo 6
console.log("Problem 6");
const wfhEmployees = ["Anna", "Sam"];
for (let i = 0; i < comp["employees"].length; i++) {
  const name = comp["employees"][i].firstName;
  comp["employees"][i].wfh = wfhEmployees.includes(name);
}
console.log(`Updated company JSON: ${JSON.stringify(obj)}`);