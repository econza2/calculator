let sign = '';
let previousValue = '';
let currentValue = '';

const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const backspace = document.querySelector('.delete');
const displayWorking = document.querySelector('.displayWorking');
const displayAnswer = document.querySelector('.displayAnswer');

numbers.forEach((number) => number.addEventListener('click', 
    function(e){
        handleNumber(e.target.textContent);
        displayAnswer.textContent = currentValue;
    }
));

operators.forEach((operator) => operator.addEventListener('click',
    function(e){
        handleOperator(e.target.textContent);
        displayWorking.textContent = previousValue + '' + sign;
        displayAnswer.textContent = currentValue;
    }
));

clear.addEventListener('click',
    function(){
        sign = '';
        previousValue = '';
        currentValue = '';
        displayWorking.textContent = '';
        displayAnswer.textContent = '';
    }
)

equal.addEventListener('click', 
    function(){
        calculate();
        displayWorking.textContent = '';
        displayAnswer.textContent = previousValue;
    }
)

decimal.addEventListener('click',
    function(){
        addDecimal();
    }
);


function handleNumber (num){
    currentValue += num;
}

function handleOperator(op){
    sign = op;
    previousValue = currentValue;
    currentValue= '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number (currentValue);

    if (sign === '+'){
        previousValue += currentValue;
    }
    else if (sign === '-'){
        previousValue -= currentValue;
    }
    else if (sign === '*'){
        previousValue *= currentValue;
    }
    else {
        previousValue /= currentValue
    }

    previousValue = roundNumber(previousValue);
    previousValue.toString();
    currentValue.toString();
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.';
    }
}

function roundNumber(num){
    return Math.round(num*1000) / 1000;
}





