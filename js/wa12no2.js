// Problemo 1
let employee = '{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech" , "Designation":"Manager", "Salary":"40000", "Raise Eligible":"true" },' +
'{ "firstName":"Mary" , "department":"Finance" , "Designation":"Trainee", "Salary":"18500", "Raise Eligible":"true" },' +
'{ "firstName":"Bill" , "department":"HR" , "Designation":"Executive", "Salary":"21200", "Raise Eligible":"false" } ]}';
const obj = JSON.parse(employee);
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


