let computer = 0;
let user = 0;

const username = prompt('Как тебя зовут?');
if (username && isNaN(username)) {
    alert(`Ну-ну, ${username}, готовь жопу! Играем до 5 побед.`);
} else {
    alert("Ты стесняешься своего имени, что ли? Уфф...")
    
}

const kmn = function () {
    let machine = Math.floor(1 + Math.random() * 3);

    if (machine == 1) {
        machine = 'камень';
    } else if (machine == 2) {
        machine = 'ножницы';
    } else {
        machine = 'бумага';
    }
    return machine;
}

const game = function (machine, brain) {
    if (machine == 'камень' && brain == 'ножницы' || machine == 'ножницы' && brain == 'бумага' || machine == 'бумага' && brain == 'камень') {
        user++;
    }
    else if (brain == machine) {
        return;
    } else {
        computer++;
    }
}

while (user < 5 && computer < 5) {
    const usersChoice = prompt('Выберите:\nкамень\nножницы\nбумага')
    if (usersChoice == 'камень' || usersChoice == 'ножницы' || usersChoice == 'бумага') {
        game(kmn(), usersChoice);

        alert(`${username} ${user} : Компьютер ${computer}`);
    } else {
        alert("Дебил, выбери значение из списка!");
        continue;
    }
}


if (user > computer) {
    alert(`${username}, ты подебил.. ой, победил! Купи себе плюшку.`);
} else {
    alert(`${username}, ну ты и лох, конечно! Давай реванш!`);
}
