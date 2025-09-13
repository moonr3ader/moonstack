//to check the data type of a variable: typeof fullName

console.log("Hello from JavaScript!");
fullName="tony stark";
console.log(fullName);

//Finding the sum
const sum = (a, b) => a + b;
console.log("The sum of 5 and 3 is:", sum(5, 3));

/*   
OBJECTS
- declaring object and its value, key : value
- type student in browser console and can see the details stored here
- how come in obj though declared in const can re-assign values?
   - const variables cannot change value, but const object's keys you can change
*/

const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};

//print all of object
console.log(student);
//changing value in object
student["fullName"] = "Rahul Sharma";
//printing a certain value from object
console.log(student["fullName"]);