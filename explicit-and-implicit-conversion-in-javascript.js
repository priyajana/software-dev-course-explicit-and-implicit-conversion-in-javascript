/*
Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.
*/


let result = Number("5" )- 2; // explicit conversion
console.log("The result is: "+result);

// Boolean of any value other than null, "", NaN, undefined, false is true. Hence the string "false" evaluates to true and the console.log is printed.
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;// explicit conversion
console.log("Total Age: " + String(totalAge));// explicit conversion

//One example of implicit type conversion

let checkEqual = Boolean(20 ==="20"); // prints false since one is number and the other is string
console.log(checkEqual);
let newCheckEqual = Boolean(20 =="20") // == equality operator checks if values are equal, string "20" is implicitly converted for comparison
console.log(newCheckEqual);

//One example of explicit type conversion
let isSnowing = null;
console.log(typeof(isSnowing));
console.log(Boolean(isSnowing));
console.log(typeof(Boolean(isSnowing)));