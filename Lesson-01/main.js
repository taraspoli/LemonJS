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

// Task-03
// Вводятся три разных числа. Найти, какое из них является средним.
let first = 3,
    second = 9,
    third = 5,
    result2;

if ((second<first && first<third) || (third<first && first<second)) {
    result2 = first
} else if ((first<second && second<third) || (third<second && second<first)) {
    result2 = second
} else if ((first<third && third<second) || (second<third && third<first)) {
    result2 = third
} else {
    result2 = "Similar numbers found"
}
console.log('Average:', result2);

// Task-04
// Вводятся три целых числа. Определить какое из них наибольшее.
let result3;
    // result3 = Math.max.apply(null, [1,2,3,-1,10,-2,0]);
    if (first>second && first>third){
        result3 = first
    } else if (second>first && second>third){
        result3 = second
    } else if (third>first && third>second){
        result3 = third
    } else {
        result3 = "Similar numbers found"
    }
console.log('Average:', result3);

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