//First Entry Event Listener

const entryone = document.querySelectorAll(".entry1");
const screenOne = document.querySelector(".screen1");


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

        const decimal = document.querySelector(".decimal");

        decimal.addEventListener("click", () => {
            if(screenArray.includes(".")){
                console.log("decimal already present");
            }
            else {
                screenArray.push(".");
            }
        });
    });
}


//Defining Click Event
let clickEvent = new Event("click");



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
            
            const decimal = document.querySelector(".decimal");

            decimal.addEventListener("click", () => {
                if(secondScreenArray.includes(".")){
                    console.log("decimal already present");
                }
                else {
                    secondScreenArray.push(".");
                }
            });
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
            
            
            const decimal = document.querySelector(".decimal");

            decimal.addEventListener("click", () => {
                if(secondScreenArray.includes(".")){
                    console.log("decimal already present");
                }
                else {
                    secondScreenArray.push(".");
                }
            });
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

    equals.disabled = false;

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
            

            const decimal = document.querySelector(".decimal");
            
            decimal.addEventListener("click", () => {
                if(secondScreenArray.includes(".")){
                    console.log("decimal already present");
                }
                else {
                    secondScreenArray.push(".");
                }
            });
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

    equals.disabled = false;

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
            

            const decimal = document.querySelector(".decimal");
            
            decimal.addEventListener("click", () => {
                if(secondScreenArray.includes(".")){
                    console.log("decimal already present");
                }
                else {
                    secondScreenArray.push(".");
                }
            });
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
    if(operatorArray[operatorArray.length -1] == "+"){
        continuingAdditiveTotal += parseFloat(screenTwo.value);
        screenTwo.value = continuingAdditiveTotal;
        equals.disabled = true;
        operatorArray = [];
    }
    else if(operatorArray[operatorArray.length -1] == "-"){
        continuingAdditiveTotal -= parseFloat(screenTwo.value);
        screenTwo.value = continuingAdditiveTotal;
        operatorArray = [];
    }
    else if(operatorArray[operatorArray.length -1] == "*"){
        continuingAdditiveTotal *= parseFloat(screenTwo.value);
        screenTwo.value = continuingAdditiveTotal;
        operatorArray = [];
    }
    else if(operatorArray[operatorArray.length -1] == "/"){
        continuingAdditiveTotal /= parseFloat(screenTwo.value);
        screenTwo.value = continuingAdditiveTotal;
        operatorArray = [];
    }
    else {
        continuingAdditiveTotal = 0;
        console.log("troubleshoot");
    }
});




//Clear Event Listener


const clear = document.querySelector(".clear");



clear.addEventListener("click", () => {
    location.reload();
});
