const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');
let result = document.getElementById('result');


const addition = document.getElementById('button-1');
let subtract = document.getElementById('button-2');
let multiply = document.getElementById('button-3');
let division = document.getElementById('button-4');


addition.addEventListener('click',add);
subtract.addEventListener('click',minus);
multiply.addEventListener('click',into);
division.addEventListener('click',divide);



function add(){
    const value = parseInt(num1.value)+parseInt(num2.value);
    result.value = value;
}

function minus(){
    const value = parseInt(num1.value) - parseInt(num2.value);
    result.value = value;
}
function into(){
    const value = parseInt(num1.value) * parseInt(num2.value);
    result.value = value;
}
function divide(){
    const value = parseInt(num1.value) / parseInt(num2.value);
    result.value = value;
}


