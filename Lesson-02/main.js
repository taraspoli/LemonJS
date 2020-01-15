'use strict';
// Task-00
// Составить расписание на неделю.
function task0() {
    let day = prompt('Put day number', ''),
        dayNumber = Number(day),
        message;

    switch (dayNumber) {
        case 1:
            message = 'First message';
            break;
        case 2:
            message = 'Second message';
            break;
        case 3:
            message = 'Third message';
            break;
        case 4:
            message = 'Fourth message';
            break;
        case 5:
            message = 'Fifth message';
            break;
        case 6:
            message = 'Sixth message';
            break;
        case 7:
            message = 'Seventh message';
            break;

        default:
            message = 'We have only 7 days in the week';
            break;
    }
    console.log(message);
};


// Task-01
// Вычислить стоимость 10 минутного междугороднего разговора.
function task1() {
    let title = 'Put city code:\nMoskow = 905\nRostov = 194\nKrasnodar = 491\nKirov = 800',
        code = Number(prompt(title, '')),
        time = 10,
        result;

    switch (code) {
        case 905:
            result = 4.15 * time + '$';
            break;
        case 194:
            result = 1.98 * time + '$';
            break;
        case 491:
            result = 2.69 * time + '$';
            break;
        case 800:
            result = 5 * time + '$';
            break;

        default:
            result = 'Put wrong code';
            break;
    }

    console.log(result);
};

// Task-02
// В переменной $min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
function task2() {
    let $max = 59,
        $min = Number(prompt('Put number from 0 till 59', '')),
        result;

    if ($min > $max) {
        result = 'Put number from 0 till 59'
    } else {
        for (let i = 0; i <= $max; i++) {
            if ($min >= 0 && $min < 15) {
                result = 'First quarter'
            } else if ($min >= 15 && $min < 30) {
                result = 'Second quarter'
            } else if ($min >= 30 && $min < 45) {
                result = 'Third quarter'
            } else {
                result = 'Fourth quarter'
            }
        }
    }

    console.log(result);
};

// Task-03
// Переменная $num может принимать одно из значений: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную $result запишем 'зима', если имеет значение '2' – 'лето' и так далее
function task3() {
    let $num = Number(prompt('Put season from 1 till 4', '')),
        $result;

    if ($num > 4) {
        $result = 'In year only 4 seasons'
    } else {
        for (let i = 0; i <= 4; i++) {
            switch ($num) {
                case 1:
                    $result = 'Winter'
                    break;
                case 2:
                    $result = 'Spring';
                    break;
                case 3:
                    $result = 'Summer';
                    break;
                case 4:
                    $result = 'Autumn';
                    break;

                default:
                    $result = 'In year only 4 seasons';
                    break;
            }
        }
    }

    console.log($result);
};

// Task-04
// a. Площадь прямоугольника
function task4() {
    let height = 23,
        width = 10,
        s = height * width;

    // b. Объем цилиндра 
    let heightC = 10,
        dC = 4,
        rC = dC / 2,
        v = Math.PI * (rC ** 2) * heightC;

    //c. Гипотенуза треугольника
    let n = 3,
        m = 4,
        k = Math.sqrt(n ** 2 + m ** 2);

    //d. Ряд Фибоначчи
    let nFib = 12,
        el,
        a = 1,
        b = 1;

    for (let i = 3; i <= nFib; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    el = b;

    //e. Переплату по кредиту
    let S = 2e6,
        p = 0.1,
        years = 5,
        month = years * 12,
        pReal = p / 12,
        temp = Math.pow((1 + pReal), month),
        payPerMonth = S * ((pReal * temp) / (temp - 1)),
        perepl = (payPerMonth * month) - S;


    console.log(
        'Rectangle: ' + s + 'sm;\n' +
        'Cylinder: ' + v.toFixed(2) + 'sm;\n' +
        'Rectangle: ' + k + 'sm;\n' +
        'Fibonacci: ' + el + '\n' +
        'Credit: ' + perepl.toFixed(2) + '$');
};

// Task-05
// Все числа от 45 до 67

function task5p1() {
    let i = 45,
        a = i;

    while (i <= 67) {
        console.log(i);
        i++;
    }

    while (a <= 670) {
        if (a % 10 === 0) {
            console.log(a);
        }
        a++;
    }
};
function task5p2() {
    for (let i = 45; i <= 67; i++) {
        console.log(i);
    }

    for (let a = 45; a <= 670; a++) {
        if (a % 10 === 0) {
            console.log(a);
        }
    }
};

// Task-06
// Вводится натуральное число. Найти сумму четных цифр, входящих в его состав.
function task6() {
    let userInt = prompt('Put number', ''),
        result = 0,
        resultTmp,
        lenght = userInt.length;

    for (let i = 0; i < lenght; i++) {

        resultTmp = userInt % 10;
        if (resultTmp % 2 === 0) {
            result += resultTmp;
        }
        userInt = parseInt(userInt / 10);
    }

    console.log('Even numbers sum: ' + result);
};

// Task-07
// Калькулятор.

// Task-08
// Найти сумму нечетных чисел в числе 255.
function task8() {
    let userInt = 255,
        result = 0,
        resultTmp,
        lenght = userInt.toString().length;

    for (let i = 0; i < lenght; i++) {

        resultTmp = userInt % 10;
        if (resultTmp % 2 != 0) {
            result += resultTmp;
        }
        userInt = parseInt(userInt / 10);
    }

    console.log('Odd numbers sum: ' + result);
};

// Task-09
// Необходимо вывести на экран таблицу умножения на 3.
function task9() {
    let number = Number(prompt('Put number from 1 till 9', '')),
        result;

    if (number >= 1 && number <= 9) {
        for (let i = 1; i <= 9; i++) {
            result = number + ' * ' + i + ' = ' + (number * i)
            console.log(result);
        }
    } else {
        console.log('You put wrong number');
    }
}

// Task-10
// Необходимо вывести на экран таблицу умножения на 3.
function task10() {
    let number = Number(prompt('Put any positive number', '')),
        result = 0;
    if (number > 0) {
        while (number--) {
            result += number + 1
        }
    } else {
        result = 'Your number is negative';
    }

    console.log(result);
};

// Task-11
// Вы загадываете эту загадку пользователю.

// Task-12
// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.
function task12() {
    let userIntMin = Number(prompt('Put min number', '')),
        userIntMax = Number(prompt('Put max number', '')),
        result = 0;

    if (userIntMin < userIntMax) {
        for (let i = userIntMin; i <= userIntMax; i++) {
            if (i % 2 != 0) {
                result += i;
            }
        }
    } else {
        result = 'You put wrong numbers';
    }

    console.log('Odd numbers sum: ' + result);
};

// Task-13
// Найти факториал числа
function task13() {
    let number = Number(prompt('Put any positive number', '')),
        result = 0;
    if (number > 0) {
        while (number--) {
            result *= number + 1
        }
    } else {
        result = 'Your number is negative';
    }

    console.log(result);
};

// Task-14
// 2 в 10 степени с помощью цикла
function task14() {
    let number = 2,
        exponent = 10,
        result = number;

    for (let i = 1; i <= exponent; i++) {
        result *= number;
    }
    console.log(result);
}


// task0();
// task1();
// task2();
// task3();
// task4();
// task5p1();
// task5p2();
// task6();
// task7();
// task8();
// task9();
// task10();
// task11();
// task12();
// task13();
// task14();
