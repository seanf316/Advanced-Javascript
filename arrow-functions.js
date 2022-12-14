/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code Block
    return a + b
}

let sum = addTwoNumbers(3, 5)
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    // Code Block
    return a + b
}

let sum1 = addTwoNumbers2(3, 10)
console.log(sum1)

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;

let sum2 = addTwoNumbers2(22, 10)
console.log(sum2)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello There!")

const sayHello = () => console.log("Hello")
sayHello()

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    Hey this is multiple line!
    </p>`
)

console.log(returnMultipleLines())