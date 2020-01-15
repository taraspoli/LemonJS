'use strict';
// Task-00
// Составить расписание на неделю.
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

// Task-01
// Вычислить стоимость 10 минутного междугороднего разговора.
let title = 'Put city code:\nMoskow = 905\nRostov = 194\nKrasnodar = 491\nKirov = 800',
    code = Number(prompt(title, '')),
    time = 10,
    result1;

switch (code) {
    case 905:
        result1 = 4.15 * time + '$';
        break;
    case 194:
        result1 = 1.98 * time + '$';
        break;
    case 491:
        result1 = 2.69 * time + '$';
        break;
    case 800:
        result1 = 5 * time + '$';
        break;

    default:
        result1 = 'Put wrong code';
        break;
}

console.log(result1);

// Task-02
// В переменной $min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
let $max = 59,
    $min = Number(prompt('Put number from 0 till 59', '')),
    result2;

if ($min > $max) {
    result2 = 'Put number from 0 till 59'
} else {
    for (let i = 0; i <= $max; i++) {
        if ($min >= 0 && $min < 15) {
            result2 = 'First quarter'
        } else if ($min >= 15 && $min < 30) {
            result2 = 'Second quarter'
        } else if ($min >= 30 && $min < 45) {
            result2 = 'Third quarter'
        } else {
            result2 = 'Fourth quarter'
        }
    }
}

console.log(result2);

// Task-03
// Переменная $num может принимать одно из значений: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную $result запишем 'зима', если имеет значение '2' – 'лето' и так далее

let $num = Number(prompt('Put season from 1 till 4', '')),
    $result;

if ($num > 4) {
    $result = 'In year only 4 seasons'
} else {
    for (let i = 0; i <= 4; i++) {
        switch (code) {
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

// Task-04
// a. Площадь прямоугольника

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

// Task-05
// Все числа от 45 до 67
let i = a = 45;

// while (i <= 67) {
//     console.log(i);
//     i++;
// }

// while (a <= 670) {
//     if (a%10===0) {
//         console.log(a);
//     }
//     a++;
// }

for (let i = 45; i <= 67; i++) {
    console.log(i);
}

for (let a = 45; a <= 670; a++) {
    if (a % 10 === 0) {
        console.log(a);
    }
}