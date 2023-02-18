/* 1) addThemAll*/
console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20
function addThemAll(a, b, ...rest) {
    let result = a + b;
    for (let num of rest) {
        result += num;
    }
    return result
}




/* 2) Задача на використання замикання.
console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12
function multiply(a) {
    return function (b) {
        return b * a
    }
}




/* 3) Напишіть функцію сортування*/
const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];
function byProperty(property, direction) {
    return function (a, b) {
        if (direction === '>') {
            if (a[property] > b[property]) {
                return 1
            }
            if (a[property] < b[property]) {
                return -1
            } else {
                return 0
            }
        } else if (direction === '<') {
            if (a[property] > b[property]) {
                return -1
            }
            if (a[property] < b[property]) {
                return 1
            } else {
                return 0
            }
        }
    }
}
console.log('releaseYear')
const sorted = movies.sort(byProperty('releaseYear', '>'))
console.log(sorted)






/* 4) Напишіть функцію detonatorTimer(delay)*/

function detonatorTimer(delay) {  // це detonatorTimer перший
    let count = delay;
    setInterval(function () {
        if (count === 0) {
            console.log('BOOM!')
            clearInterval(setInterval);
        }
        if (count > 0) {
            console.log(count);
            count--
        }

    }, 1000)

}

function detonatorTimer2(delay) { // УВАГА  це detonatorTimer2 (другий)
    setTimeout(function repeatTimeout() {
        if (delay === 0) {
            console.log('BOOM!')
            clearTimeout(setTimeout);
        }

        if (delay > 0) {
            console.log(delay);
            setTimeout(repeatTimeout, 1000);
        }
        delay--;
    }, 1000);
}

//detonatorTimer(3)





/* 5) Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. */
let me = {
    name: 'Diana',
    nickname: 'polinavafik',
    residency: 'Dnipro',
    gender: 'female',
    age: 23,
    birthday: '12th of April',
    hobby: 'cosplay',
    hasCat: true,
    hasDog: false,
    defaultMood: 'calm',
    currentMood: 'stressed',
    defaultHair: 'Blonde',
    currentHair: 'Faded Pink',
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
        console.log(`I hope that next year I'm gonna be able to go to some ${this.hobby} events`);
    },
    describeMyMood() {
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    },
    hairColour() {
        console.log(`My natural hair colour is ${this.defaultHair}, but currently it's ${this.currentHair}`);
    },
    reminder() {
        console.log(`My birthday is on ${this.birthday} so dont forget to congratulate me`);
    },
}
//me.introduce();
//me.prognose();
//me.describeMyMood();
//me.hairColour();
//me.reminder();



/*6. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:*/

let securedSelfIntroduce = me.introduce.bind(me)
let securedSelfPrognose = me.prognose.bind(me)
let securedSelfDescribeMyMood = me.describeMyMood.bind(me)
let securedHairColour = me.hairColour.bind(me)
let securedReminder = me.reminder.bind(me)


setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат*
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат*
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат*
setTimeout(securedHairColour, 4000); // виведе коректний результат*
setTimeout(securedReminder, 5000); // виведе коректний результат*




/* 7) Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд. */
function SomeFunction() {
    console.log(`-DARY! `)
    setTimeout(() => console.log(`LEGENDARY!`), 1500)
    clearTimeout(setTimeout)
}


/*function slower(func, seconds) {
    millisec = seconds * 1000;
    console.log(`Ted, my boy, just in ${seconds} seconds it's gonna bE LEGEN- `)
    setTimeout(() => console.log(`..wait for it..`), 1500)
    return setTimeout(func, millisec)

}*/

function slower(func, seconds) {
    millisec = seconds * 1000;
    console.log(`Ted, my boy, just in ${seconds} seconds it's gonna bE LEGEN-`)
    setTimeout(() => console.log(`..wait for it..`), 1400)
    return () =>
        setTimeout(function () {
            func.call();
        }, millisec);

}

let slowedSomeFunction = slower(SomeFunction, 5); /* обгортаєте свою довільну функцію 'someFunction' в декоратор*/

//slower(SomeFunction, 5)
slowedSomeFunction()







