// Task 1: Variables and Data Types
let Fullname = "Purity Sang";
let age = 20;
let isStudent = true;
let hobbies = ["reading", "coding", "hiking"];
let person = {
    firstName: "Purity",
    lastName: "Sang",
    age: 21
};

console.log(`Name: ${Fullname} (Type: ${typeof Fullname})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Task 2: Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:", num1));
    let num2 = parseFloat(prompt("Enter the second number:", num2));
    let operation = prompt("Choose an operation (+, -, *, /):", operation);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}

// Call the calculator function to execute
calculator();

 //Task 3: Greet User Function
function greetUser(Fullname) {
    return `Hello, ${Fullname}! Welcome to JavaScript learning.`;
}

// Display the greeting message in the HTML element
let greetingMessage = greetUser("Purity Sang");
document.getElementById("greeting-message").innerText = greetingMessage;

// Task 4: If Statements - Voting Eligibility
function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));
    let message;

    if (isNaN(userAge)) {
        message = "Invalid input. Please enter a valid age.";
    } else if (userAge >= 18) {
        message = "You are eligible to vote.";
    } else {
        message = "You are not eligible to vote.";
    }

    document.getElementById("voting-eligibility").innerText = message;
}

// Call the checkVotingEligibility function to execute
checkVotingEligibility();

// Task 5: Loops - Display Numbers from 1 to 10
function displayNumbers() {
    let numberList = document.getElementById("number-list");

    for (let i = 1; i <= 10; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = i;
        numberList.appendChild(listItem);
    }
}

// Call the displayNumbers function to execute
displayNumbers();

// Task 6: Selecting and Modifying HTML Elements
// Change the text of the <h1> element to "JavaScript in Action!"
document.querySelector("h1").innerText = "JavaScript in Action!";

// Add a new <p> inside the dynamic-content <div> with the text "This content was added dynamically using JavaScript."
let newParagraph = document.createElement("p");
newParagraph.innerText = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);