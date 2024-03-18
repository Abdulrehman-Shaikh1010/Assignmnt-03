/*store a person name in a variable, and then
print that person's name in uppercase,lowercase,titlecase*/
var personName = "Abdulrehman";
//lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//titlecase
var firstletter = personName.charAt(0).toUpperCase();
var restletter = personName.slice(1).toLowerCase();
var titlecase = firstletter + restletter;
console.log(titlecase);
console.log();
