// 4***
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
//ссылаюсь на этот скрипт в файле checkAge.html


const checkAge = function (age) {
    let age_1 = 10;
    let age_2 = 18;
    let age_3 = 60;

    if (!+age) {
        alert('Error!!!');
    } else if (age < age_2) {
        alert(`You don’t have access cause your age is ${age} It’s less then ${age_2}`);
    } else if (age >= age_2 && age < age_3) {
        alert('Welcome!');
    } else if (age > age_3) {
        alert('Keep calm and look Culture channel');
    } else {
        alert('Technical work');
    }
}

let question = prompt('How old are you?', 0);
checkAge(question)

