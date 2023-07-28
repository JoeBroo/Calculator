const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const operators = ['+', '-', '*', '/'];


// Add two numbers
function add() {
    let a = prompt('First number: ');
    let b = prompt('Second number: ');
    let numOne = parseInt(a);
    let numTwo = parseInt(b);
    let sum = numOne + numTwo;
    alert(`${numOne} + ${numTwo} is ${sum}`);
}

//Subtract two numbers
function subtract() {
    let a = prompt('First number: ');
    let b = prompt('Second number: ');
    let numOne = parseInt(a);
    let numTwo = parseInt(b);
    let sum = numOne - numTwo;
    alert(`${numOne} - ${numTwo} is ${sum}`);
}

//Multiply two numbers
function multiply() {
    let a = prompt('First number: ');
    let b = prompt('Second number: ');
    let numOne = parseInt(a);
    let numTwo = parseInt(b);
    let sum = numOne * numTwo;
    alert(`${numOne} x ${numTwo} is ${sum}`);
}

//Divide two numbers
function divide() {
    let a = prompt('First number: ');
    let b = prompt('Second number: ');
    let numOne = parseInt(a);
    let numTwo = parseInt(b);
    let sum = numOne / numTwo;
    alert(`${numOne} / ${numTwo} is ${sum}`);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function operate() {
    let operator = prompt('choose operator: ');
    console.log(operator);

    if (operator === '+') {
        add();

    } else if (operator === '-') {
        subtract();

    } else if (operator === '*') {
        multiply();

    } else if (operator === '/') {
        divide();

    } else {
        alert(`Please enter one of the following operators: '+', '-', '*' or '/'`);
        operate();
    }
 }