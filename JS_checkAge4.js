// 4***
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
//ссылаюсь на этот скрипт в файле checkAge.html

const checkAge = function (age) {

    if (isNaN(age) || !age) {
        alert('Error!!!');
    } else if (age < 18) {
        alert(`You don’t have access cause your age is ${age} It’s less then 18`);
    } else if (age >= 18 && age < 60) {
        alert('Welcome!');
    } else if (age >= 60) {
        alert('Keep calm and watch Culture channel');
    } else {
        alert('Technical work');
    }
}
let question = prompt('How old are you?');
checkAge(question)

