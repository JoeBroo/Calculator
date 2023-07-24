const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');


// Add two numbers
function add() {
    let a = 2;
    let b = 2;
    let sum = a + b;
    console.log(`${a} + ${b} is ${sum}`);
    return sum
}

//Subtract two numbers
function subtract() {
    let a = 5;
    let b = 3;
    let sum = a - b;
    console.log(`${a} - ${b} is ${sum}`);
    return sum;
}

//Multiply two numbers
function multiply() {
    let a = 5;
    let b = 2;
    let sum = a * b;
    console.log(`${a} x ${b} is ${sum}`);
    return sum;
}

//Divide two numbers
function divide() {
    let a = 100;
    let b = 25;
    let sum = a / b;
    console.log(`${a} / ${b} is ${sum}`);
    return sum;
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);