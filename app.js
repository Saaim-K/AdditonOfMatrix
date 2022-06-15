let input1 = ''
let input2 = ''

function start() {
    let matrix1 = document.querySelector('#matrix1')
    let matrix2 = document.querySelector('#matrix2')
    let resultMatrix = document.querySelector('#resultMatrix')

    matrix1.innerHTML = "";
    matrix2.innerHTML = "";
    resultMatrix.innerHTML = "";

    input1 = +document.querySelector('#input1').value//5
    input2 = +document.querySelector('#input2').value//4
    for (let i = 0; i < input1; i++) {//0
        for (let j = 0; j < input2; j++) {//0
            matrix1.innerHTML +=
                `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value='0'>`;
            matrix2.innerHTML +=
                `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value='0'>`;
            resultMatrix.innerHTML +=
                `<input class='black' type="number" disabled required min="0" max="100" id="resultMatrix-${i}-${j}" value='0'>`
        }
        matrix1.innerHTML += `<br>`
        matrix2.innerHTML += `<br>`
        resultMatrix.innerHTML += `<br>`
    }
}
function sum() {
    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            document.querySelector(`#resultMatrix-${i}-${j}`).value =
                +document.querySelector(`#m1-${i}-${j}`).value
                +
                +document.querySelector(`#m2-${i}-${j}`).value;
        }
    }
}