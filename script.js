const calculateButton = document.querySelector(".calculate");
const parametersInput = document.createElement("input");
parametersInput.setAttribute("type", "text");
//parametersInput.classList.add("text-input");
const body = document.querySelector("body");
body.appendChild(parametersInput); 



let inputArray = [];
parametersInput.addEventListener("keydown", (event) => {
    if(
        event.key == "0" ||
        event.key == "1" ||
        event.key == "2" ||
        event.key == "3" ||
        event.key == "4" ||
        event.key == "5" ||
        event.key == "6" ||
        event.key == "7" ||
        event.key == "8" ||
        event.key == "9" ||
        event.key == "+"
    ) {
        inputArray.push(event.key);
    }
    else {
        inputArray.push("");
    }
});



calculateButton.addEventListener("click", () => {
    let rawArray = [];
    rawArray = inputArray;
    let secondOperand;
    let firstPlusIndex = rawArray.indexOf("+");
    console.log(rawArray);
    console.log(firstPlusIndex);

   if (firstPlusIndex == -1){
    secondOperand = [];
    
   }
   else {
    secondOperand = rawArray.splice(firstPlusIndex, (rawArray.length - firstPlusIndex));
   }
    
    let operator = secondOperand.slice(0, 1);
    secondOperand.splice(0, 1);
    

//Remove Whitespaces usign for loop
let firstArrayLength = rawArray.length;
for(let k = 0; k < firstArrayLength; k++){
    let blankIndex = rawArray.lastIndexOf("");
    if(blankIndex !== -1){
        rawArray.splice(blankIndex, 1);
    }
}


let secondArrayLength = secondOperand.length;
for(let l = 0; l < firstArrayLength; l++){
    let blankIndex = secondOperand.lastIndexOf("");
    if(blankIndex !== -1){
        secondOperand.splice(blankIndex, 1);
    }
}

  
let secondPlusIndex = secondOperand.indexOf("+");
let discardedOperand;

if (secondPlusIndex == -1){
    discardedOperand = [];
    
}
else {
    discardedOperand = secondOperand.splice(secondPlusIndex, (secondOperand.length - secondPlusIndex));
}

    console.log("first operand", rawArray);
    console.log("second operand", secondOperand);
    console.log("operator", operator);
    console.log("discardedOperand", discardedOperand);

    let firstOperandString = rawArray.join("");
    let secondOperandString = secondOperand.join("");


    console.log("First String", firstOperandString);
    console.log("Second String", secondOperandString);


    let firstOperandNumber;
    let secondOperandNumber;


    if(firstOperandString === ""){
        firstOperandNumber = 0;
    }
    else{
        firstOperandNumber = parseInt(firstOperandString);
    }


    if(secondOperandString === ""){
        secondOperandNumber = 0;
    }
    else{
        secondOperandNumber = parseInt(secondOperandString);
    }



    console.log("First Number", firstOperandNumber);
    console.log("Second Number", secondOperandNumber);


    let sum = firstOperandNumber + secondOperandNumber;
    console.log("The sum is:, ", sum);
});


/*



Here Marks the begining of Adding the Components to the DOM



*/





//First Entry Event Listener

const entryone = document.querySelectorAll(".entry1");
const screenOne = document.querySelector(".screen1");
const operator = document.querySelector(".operator");

let additiveTotal = 0;
let multiplicativeTotal = 1;
let continuingAdditiveTotal;
let continuingMultiplicativeTotal;
let operatorArray = [];
let firstNumber;


let screenArray = [];
for(let i = 0; i < entryone.length; i++){
    entryone[i].addEventListener("click", () => {
        let containingText = entryone[i].textContent;
        screenArray.push(containingText);
        let screenValue = screenArray.join("");
        screenOne.value = screenValue;   
    });
}




//Execution of Previous Operation Before The Current Operation Is Performed
//e.g If I press the plus button then the minus button......
//.....the operations from the plus buttom must be executed first before those of 
//the minus button



const operatorExecutor = document.createElement("button");
let clickEvent = new Event("click", { bubbles: true, cancelable: false});

operatorExecutor.addEventListener("click", () => {

    if (operatorArray.length >= 1){
        if(operatorArray[operatorArray.length - 1] === "+"){
            addition.dispatchEvent(clickEvent);
        }
        else if (operatorArray[operatorArray.length -1] === "-"){
            subtraction.dispatchEvent(clickEvent);
        }
    }
});



// Addition Event Listener

addition = document.querySelector(".plus");
screenTwo = document.querySelector(".screen2");
entrytwo = document.querySelectorAll(".entry2");

let numberAdditionPressed = 0;
addition.addEventListener("click", () =>{
    
    equals.disabled = false;


    if (operatorArray.length >= 1){
        if(operatorArray[operatorArray.length - 1] === "-"){
            subtraction.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "*"){
            multiplication.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "/"){
            division.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
    }

    firstNumber = parseFloat(screenOne.value);

    if (operatorArray.length < 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal = 0;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberAdditionPressed);
        }
        else{
            continuingAdditiveTotal = firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberAdditionPressed);
        }
    }
    else if (operatorArray.length == 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal += 0;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberAdditionPressed);
        }
        else {
            continuingAdditiveTotal += firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberAdditionPressed);
        }
    }
    else if(operatorArray.length > 1){
        if(operatorArray[operatorArray.length - 1] !== "+"){
            continuingAdditiveTotal = parseFloat(screenTwo.value);
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberAdditionPressed); 
        }
        else {
            continuingAdditiveTotal += firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberAdditionPressed);
        }    
    }
    else {
        console.log("Should not get to this point");
    }
    

    let secondScreenArray = [];
    for(let i = 0; i < entrytwo.length; i++){
        entrytwo[i].addEventListener("click", () => {
            let secondContainingText = entrytwo[i].textContent;
            secondScreenArray.push(secondContainingText);
            let secondScreenValue = secondScreenArray.join("");
            screenTwo.value = secondScreenValue; 
            secondValue = screenTwo.value;       
        });
    }  


    screenTwo.value = continuingAdditiveTotal;
    console.log("firstNumber", firstNumber);
    console.log("total", continuingAdditiveTotal);
    

    operatorArray.push(addition.textContent); 
    console.log("operator Array", operatorArray);

    numberAdditionPressed++;
});





//Subtraction Event Listener

const subtraction = document.querySelector(".minus");

let numberSubtractionPressed = 0;
subtraction.addEventListener("click", () =>{
    
    equals.disabled = false;


    if (operatorArray.length >= 1){
        if(operatorArray[operatorArray.length - 1] === "+"){
            addition.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "*"){
            multiplication.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "/"){
            division.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
    }


    firstNumber = parseFloat(screenOne.value);

    if (operatorArray.length < 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal = 0;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberSubtractionPressed);
        }
        else{
            continuingAdditiveTotal = firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberSubtractionPressed);
        }
    }
    else if (operatorArray.length == 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal -= 0;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberSubtractionPressed);
        }
        else {
            continuingAdditiveTotal -= firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberSubtractionPressed);
        }
    }
    else if(operatorArray.length > 1){
        if(operatorArray[operatorArray.length - 1] !== "-"){
            continuingAdditiveTotal = parseFloat(screenTwo.value);
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberSubtractionPressed); 
        }
        else {
            continuingAdditiveTotal -= firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberSubtractionPressed);
        }    
    }
    else {
        console.log("Should not get to this point");
    }

    
    let secondScreenArray = [];
    for(let i = 0; i < entrytwo.length; i++){
        entrytwo[i].addEventListener("click", () => {
            let secondContainingText = entrytwo[i].textContent;
            secondScreenArray.push(secondContainingText);
            let secondScreenValue = secondScreenArray.join("");
            screenTwo.value = secondScreenValue; 
            secondValue = screenTwo.value;       
        });
    }  
   
    
    screenTwo.value = continuingAdditiveTotal;
    console.log("firstNumber", firstNumber);
    console.log("total", continuingAdditiveTotal);


    operatorArray.push(subtraction.textContent);
    console.log("operator Array", operatorArray);
    



    numberSubtractionPressed++; 
});



//Multiplication Event Listener


const multiplication = document.querySelector(".multiplication");

let numberMultiplicationPressed = 0;

multiplication.addEventListener("click", () => {

    if (operatorArray.length >= 1){
        if(operatorArray[operatorArray.length - 1] === "+"){
            addition.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "-"){
            subtraction.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "/"){
            division.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
    }
    
    firstNumber = parseFloat(screenOne.value);

    if (operatorArray.length < 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal = 0;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberMultiplicationPressed);
        }
        else{
            continuingAdditiveTotal = firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberMultiplicationPressed);
        }
    }
    else if (operatorArray.length == 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal *= 1;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberMultiplicationPressed);
        }
        else {
            continuingAdditiveTotal *= firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberMultiplicationPressed);
        }
    }
    else if(operatorArray.length > 1){
        if(operatorArray[operatorArray.length - 1] !== "*"){
            continuingAdditiveTotal = parseFloat(screenTwo.value);
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberMultiplicationPressed); 
        }
        else {
            continuingAdditiveTotal *= firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberMultiplicationPressed);
        }    
    }
    else {
        console.log("Should not get to this point");
    }


    let secondScreenArray = [];
    for(let i = 0; i < entrytwo.length; i++){
        entrytwo[i].addEventListener("click", () => {
            let secondContainingText = entrytwo[i].textContent;
            secondScreenArray.push(secondContainingText);
            let secondScreenValue = secondScreenArray.join("");
            screenTwo.value = secondScreenValue; 
            secondValue = screenTwo.value;       
        });
    } 


    screenTwo.value = continuingAdditiveTotal;
    console.log("firstNumber", firstNumber);
    console.log("total", continuingAdditiveTotal);


    operatorArray.push(multiplication.textContent);
    console.log("operator Array", operatorArray);

    numberMultiplicationPressed++;
});







//Divison Event Listener 

const division = document.querySelector(".division");

let numberDivisionPressed = 0;

division.addEventListener("click", () => {

    if (operatorArray.length >= 1){
        if(operatorArray[operatorArray.length - 1] === "+"){
            addition.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "-"){
            subtraction.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
        else if(operatorArray[operatorArray.length - 1] === "*"){
            multiplication.dispatchEvent(clickEvent);
            continuingAdditiveTotal = screenTwo.value;
        }
    }
    
    
    firstNumber = parseFloat(screenOne.value);

    if (operatorArray.length < 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal = 0;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberDivisionPressed);
        }
        else{
            continuingAdditiveTotal = firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberDivisionPressed);
        }
    }
    else if (operatorArray.length == 1){
        if (isNaN(firstNumber)){
            continuingAdditiveTotal /= 1;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberDivisionPressed);
        }
        else {
            continuingAdditiveTotal /= firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberDivisionPressed);
        }
    }
    else if(operatorArray.length > 1){
        if(operatorArray[operatorArray.length - 1] !== "/"){
            continuingAdditiveTotal = parseFloat(screenTwo.value);
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberDivisionPressed); 
        }
        else {
            continuingAdditiveTotal /= firstNumber;
            console.log("continuing Total ", continuingAdditiveTotal," array Length ", operatorArray.length,
                "number Pressed", numberDivisionPressed);
        }    
    }
    else {
        console.log("Should not get to this point");
    }


    let secondScreenArray = [];
    for(let i = 0; i < entrytwo.length; i++){
        entrytwo[i].addEventListener("click", () => {
            let secondContainingText = entrytwo[i].textContent;
            secondScreenArray.push(secondContainingText);
            let secondScreenValue = secondScreenArray.join("");
            screenTwo.value = secondScreenValue; 
            secondValue = screenTwo.value;       
        });
    } 


    screenTwo.value = continuingAdditiveTotal;
    console.log("firstNumber", firstNumber);
    console.log("total", continuingAdditiveTotal);


    operatorArray.push(division.textContent);
    console.log("operator Array", operatorArray);
});






























// Equal Sign Event Listener

const equals = document.querySelector(".equals");



equals.addEventListener("click", () => {
    if(operatorArray.length < 1){
        screenTwo.value = 0;
    }
    else{
        if(operatorArray[operatorArray.length - 1] == "+"){
            addition.dispatchEvent(clickEvent);
            screenTwo.value = continuingAdditiveTotal;
            equals.disabled = true;
        }
        else if(operatorArray[operatorArray.length - 1] == "-"){
            subtraction.dispatchEvent(clickEvent);
            screenTwo.value = continuingAdditiveTotal;
            equals.disabled = true;
        }
    }
});

