const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const previousScreen = document.querySelector('.display-previous');
const currentScreen = document.querySelector('.display-current');

let operator = ''
let previousValue = ''
let currentValue = ''

function getNumber(num) {
    if (currentValue.length <= 7) {
        currentValue += num;
    }
}

function getOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue;
    } else if (operator === '/') {
        previousValue / currentValue;
    }
    
    previousValue = roundNum(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}