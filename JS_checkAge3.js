// 3**
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


const checkAge = function (age) {

    if (age !== "" && !isNaN(age)) {
        if (age < 18) {
            console.log(`You don’t have access cause your age is ${age} It’s less then 18`);
        } else if (age >= 18 && age < 60) {
            console.log('Welcome!');
        } else if (age >= 60) {
            console.log('Keep calm and look Culture channel');
        } else {
            console.log('Technical work');
        }
    } else {
        console.log('Error!!!');
    }
}

checkAge(17);
checkAge(18);
checkAge(61);
checkAge("kit");
checkAge("15")
checkAge("80")
checkAge("0")
checkAge("")
