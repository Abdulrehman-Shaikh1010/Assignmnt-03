/*store a person name in a variable, and then 
print that person's name in uppercase,lowercase,titlecase*/

const personName: string ="Abdulrehman";
//lowercase
console.log(personName.toLowerCase())

//uppercase
console.log(personName.toUpperCase());

//titlecase
let firstletter: string = personName.charAt(0).toUpperCase();
let restletter: string = personName.slice(1).toLowerCase();
let titlecase = firstletter + restletter
console.log(titlecase)

console.log()

