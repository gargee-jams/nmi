let input1 = document. querySelector('#input1');
let input2 = document.querySelector('#input2');
let addButton = document.querySelector('#addButton');
let output = document.querySelector('#output');

function add() {
    output.value = Number(input1.value) + Number(input2.value);
}
addButton.onclick = () => add();