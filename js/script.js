"use strict";

// a = 15;
// console.log(a);

// console.log(1);
// console.log(number);
// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// console.log(name);
// var name = 'Ivan';
// // name = 'Alex';

// {
//     let number = 50;
// }
// console.log(number);

// alert(5);
// [].push('a');

// let number = 4.6;
// console.log(-4/0);
// console.log('string' * 6);

// const persone = 'Alex';

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);
//  console.log(typeof(answers));
//  console.log(typeof(null));

// const category = 'toys';

// // console.log('https://someurl.com/' + category + '/' + '4');
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == '8');
// console.log(2*4 === 8);

// &&
// ||

// const isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);

// const isChecked = true,
//     isClose = false;

// console.log(isChecked || isClose);

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || isClose);

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);

// console.log(2 + 2 * 2 === 8);

// console.log(2 + 2 * 2 != 8);
// console.log(2 + 2 * 2 != '6');
// console.log(2 + 2 * 2 !== '6');

// const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

// // console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// console.log(typeof(personalMovieDB.movies));
// console.log(typeof(personalMovieDB.actors));
// console.log(typeof(personalMovieDB.genres));
// console.log(typeof(personalMovieDB.privat));

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// 4 + 4 бинарный плюс
// +4; унарный плюс

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Neverno');
//         break;
//     case '100':
//         console.log('Neverno');
//         break;
//         case '50':
//         console.log('V tochky');
//         break;
//     default:
//         console.log('Ne v etot raz')
//         break;
// }

// let num = '50';

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);    
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания


// const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");



// for (let i = 1; i <= numberOfFilms; i++) {
//     if (i <= numberOfFilms) {
//         let a = prompt('Один из последних просмотренных фильмов?', '');
//             switch (a) {
//                 case null:
//                     a = prompt('Один из последних просмотренных фильмов?', '');
//                 case '':
//                     a = prompt('Один из последних просмотренных фильмов?', '');                 
//             }
//             // while ( a === null | a === '' | a.length >  50 ) {
//             //     a = prompt('Один из последних просмотренных фильмов?', '');
//             // }
//             // if ( a === '' | a === NaN | a.length >  50) {
//             //     a = prompt('Один из последних просмотренных фильмов?', '');
//             // }
//         let b = +prompt('На сколько оцените его?', '');
//         personalMovieDB.movies[a] = b;
//     }
// }

// if (personalMovieDB.count < 10) {
//     alert ("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count <=30 ) {
//     alert ("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     alert ("Вы киноман");
// } else {
//     alert ("Произошла ошибка");
// }

// console.log(personalMovieDB);

// 

// // console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// console.log(typeof(personalMovieDB.movies));
// console.log(typeof(personalMovieDB.actors));
// console.log(typeof(personalMovieDB.genres));
// console.log(typeof(personalMovieDB.privat));

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

    
// }



// if (personalMovieDB.count < 10) {
//     alert ("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count <=30 ) {
//     alert ("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     alert ("Вы киноман");
// } else {
//     alert ("Произошла ошибка");
// }

// console.log(personalMovieDB);

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// // function calc(a, b) {
// //     return (a + b);
// //     console.log('dfdfjh');
// // }

// // console.log(calc(3, 4));
// // console.log(calc(6, 8));
// // console.log(calc(9, 5));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello World');
// };

// logger();

// // const calc = (a, b) => { return a + b;};

// const calc = (a, b) => {
//     console.log('1');
//     return a + b; 
// };

// const str = 'teSt';
// const arr = [1, 2, 3];
// console.log(arr.length);
// console.log(str[2] = 'd');
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));
// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';
// // console.log(logg.slice(6,11));
// // console.log(logg.slice(6));
// // console.log(logg.slice(-5,-1));
// // console.log(logg.substring(6,11));
// console.log(logg.substr(6,5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Lesson 18

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <=30 ) {
        alert ("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert ("Вы киноман");
    } else {
        alert ("Произошла ошибка");
    }
}

// detectPersonalLevel();



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }


    
}

writeYourGenres();