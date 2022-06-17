// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let n = 1;
while (n <= 10) {
    let exp = Math.pow(2, n);
    console.log(`2 to the ${n} power = ${exp}`);
    n++;
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const expon = function (e) {
    if (!isNaN(e)) {
        let exp = Math.pow(2, e);
        console.log(`2 to the ${e} power = ${exp}`)
    }
}
expon(4);

// можно через forEach:

const expon2 = function (...arr) {
    arr.forEach(x => {
        if (!isNaN(x)) {
            let exp = Math.pow(2, x);
            console.log(`2 to the ${x} power = ${exp}`)
        }
    })
}
expon2(3, 5, 7, 16);

/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/

let smile = ':)';
while (smile.length <= 10) {
    console.log(smile);
    smile += ':)';
}

//можно через for

let s = ':)';
for (smile = ':)'; smile.length <= 10; smile += s) {
    console.log(smile);
}

/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/

function print(word, repeat) {
    let result = '';
    for (let i = 0; i < repeat; i++) {
        console.log(result += " " + word);
    }
}
print("shit", 10)

/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'*/

let fact = function getWordStructure(word) {

    let vowels = /[aeiou]/g;
    let consonants = /[qwrtpsdfghjklzxcvbnm]/g
    let check = word.toLowerCase();
    let resultV = check.match(vowels).length;
    let resultC = check.match(consonants).length;

    console.log(`Слово ${word} состоит из ${resultV} гласных и ${resultC} согласных букв`);
}

fact("case")
fact("Case")
fact("Check-list")

/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'*/

const isPalindrom = word => word.toLowerCase().split('').reverse().join('') === word.toLowerCase();

console.log(isPalindrom("abba"))
console.log(isPalindrom("Abba"))

