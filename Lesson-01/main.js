// Task-00
// Создать 9 переменных
var oldFirst = 100,
    oldSecond = '100',
    oldThird = oldFirst + oldSecond;

const globalFirst = oldFirst,
    globalsecond = oldSecond,
    globalThird = 100500;

let primary = 100,
    secondary = -100,
    result;

// Task-01
// Из двух чисел с разной четностью вывести на экран нечетное число.
let result1;

    if (primary < 0) {
        result1 = primary
    } else if (secondary < 0) {
        result1 = secondary
    } else {
        result1 = "All numbers > 0"
    }

console.log('Negative number:', result1);

// Task-02
// Определить количество дней в году, который вводит пользователь.
let year = 2020,
    tempVar1 = year%4,
    tempVar2 = year%400;

    if ( tempVar1!=0 && tempVar1!=0) {
        result2 = 'NORMAL'
    } else {
        result2 = "LEAP"
    }
    
console.log(year + ' is a ' + result2 + ' year');

// Task-03
// Вводятся три разных числа. Найти, какое из них является средним.
let first = 3,
    second = 9,
    third = 5,
    result3;

    if ((second<first && first<third) || (third<first && first<second)) {
        result3 = first
    } else if ((first<second && second<third) || (third<second && second<first)) {
        result3 = second
    } else if ((first<third && third<second) || (second<third && third<first)) {
        result3 = third
    } else {
        result3 = "Similar numbers found"
    }

console.log('Average:', result3);

// Task-04
// Вводятся три целых числа. Определить какое из них наибольшее.
let result4;

    // result4 = Math.max.apply(null, [1,2,3,-1,10,-2,0]);
    if (first>second && first>third){
        result4 = first
    } else if (second>first && second>third){
        result4 = second
    } else if (third>first && third>second){
        result4 = third
    } else {
        result4 = "Similar numbers found"
    }

console.log('Average:', result4);

// Task-05
// Закомменировать 1 строчку однострочным комментарием и остальные многострочным
/*
    if (first>second && first>third){
        result3 = first
    } else if (second>first && second>third){
        result3 = second
    } else if (third>first && third>second){
        result3 = third
    } else {
        result3 = "Similar numbers found"
    }
*/