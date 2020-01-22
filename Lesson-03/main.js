'use strict';

// Task-00
// Создайте 4 любые математические функции.
function getAddition(num1, num2) {
    let resultSum;
    resultSum = num1 + num2;
    return resultSum;
}

function getSubstraction(num1, num2) {
    let resultSubst;
    resultSubst = num1 - num2;
    return resultSubst;
}

function getMultiplication(num1, num2) {
    let resultMult;
    resultMult = num1 * num2;
    return resultMult;
}

function getDivision(num1, num2) {
    let resultDiv;
    resultDiv = num1 / num2;
    return resultDiv;
}

// console.log(getAddition(10,2));
// console.log(getSubstraction(10,2));
// console.log(getMultiplication(10,2));
// console.log(getDivision(10,2));

// Task-01
// Создать 3 функции без параметров и return
function getConsoleName() {
    let message = 'Taras';
    console.log(message);
}
// getConsoleName();

function getAlertName() {
    let message = 'Taras';
    alert(message);
}
// getAlertName();

// Task-02
// Суммы всех нечетных чисел в передаваемом числе
function getNumberSum(number) {
    for(let i=0; i<=number; i++) {
        let result = 0;
        for (let i = 0; i <= number; i++) {
            if (i % 2 === 0) {
                result += i;
            }
        }
        return result;
    }
}

console.log(getNumberSum(4));

// Task-03
// Нахождение наибольшего четного числа в передаваемом числе
function getEvenNum(number) {
    let result;
    if (number % 2 === 0) {
        result = number;
    } else {
        result = number - 1;
    }
    return result;
}

console.log(getEvenNum(121));

// Task-04
// Нажождения последнего нечетного числа в передаваемом числе
function getOddNum(number) {
    let result;
    if (number % 2 != 0) {
        result = number;
    } else {
        result = number - 1;
    }
    return result;
}

console.log(getOddNum(121));