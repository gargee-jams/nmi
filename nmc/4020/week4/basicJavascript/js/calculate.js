let input1 = document. querySelector('#input1');
let input2 = document.querySelector('#input2');
let op = document.getElementById('#operator');
let addButton = document.querySelector('#addButton');
let subButton = document.querySelector('#subButton');
let multButton = document.querySelector('#multButton');
let divButton = document.querySelector('#divButton');
let output = document.querySelector('#output');

function add() {
   
    output.value = "$" + Number(input1.value) + Number(input2.value);
    op.innerText = '+';
}
function sub() {
    op.innerHTML = '-';
    output.value = "$" + Number(input1.value) - Number(input2.value);
}
function mult() {
    op.innerHTML = '*';
    output.value = "$" + Number(input1.value) * Number(input2.value);
}
function div() {
    op.innerHTML = '/';
    output.value = "$" + Number(input1.value) / Number(input2.value);
}
addButton.onclick = () => add();
subButton.onclick = () => sub();
multButton.onclick = () => mult();
divButton.onclick = () => div();
