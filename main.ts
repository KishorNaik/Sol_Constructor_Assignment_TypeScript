import index from "./index";

let indexObj = new index("Kishor", 35, "kishor@gmail.com");
indexObj.testMethod();

//console.log(indexObj.fullName); // Compile Time Error
console.log(indexObj.age);
//console.log(indexObj.emailId); // Compile Time Error