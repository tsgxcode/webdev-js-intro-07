"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

// Create a function called `returnTheRemainder` that returns the remainder of the division of two numbers
function returnTheRemainder(num1, num2) {
    return num1 % num2;
}

// Create a function called `checkIfEven` that returns true or false based on the input
function checkIfEven(number) {
    return number % 2 === 0;
}

// Create a function called `getTheFourthElement` that takes in the existing array, `lostNumbers`, and returns the fourth element
function getTheFourthElement(lostNumbers) {
    if (lostNumbers.length >= 4) {
        return lostNumbers[3]; // Return the fourth element (index 3)
    } else {
        return "The array has fewer than 4 elements.";
    }
}

// Create the remaining functionality to render your answers
function render() {
    // Example array for `getTheFourthElement`
    const lostNumbers = [4, 8, 15, 16, 23, 42];

    // Call the functions and store the results
    const remainder = returnTheRemainder(10, 3); // Example arguments
    const isEven = checkIfEven(10); // Example input
    const fourthElement = getTheFourthElement(lostNumbers);

    // Render the results (console logging as an example; can be updated for DOM rendering)
    console.log("Remainder of 10 ÷ 3:", remainder); // Output: 1
    console.log("Is 10 even?", isEven); // Output: true
    console.log("Fourth element of the array:", fourthElement); // Output: 16

    // Example rendering in the DOM
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Remainder of 10 ÷ 3: ${remainder}</p>
        <p>Is 10 even? ${isEven}</p>
        <p>Fourth element of the array: ${fourthElement}</p>
    `;
}

// Call the render function on page load or when needed
render();