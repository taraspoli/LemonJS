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
    for (let i = 0; i >= $max; i++) {
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