//Task from classwork
let usersAge = 2020 - Number(prompt("Хочешь поиграть в DOOM Ethernal укажи свой год рождения: "));

if (isNaN(usersAge)) {
  console.log("Надо число, попробуй еще раз(Нажмите F5)");
} else if (usersAge < 18 && usersAge < 12) {
  console.log(`Прости, но не сегодня, приходи через ${(18 - usersAge) * 365} дней`);
  console.log("Тебе больше подойдет ГДЗ");
} else if (usersAge < 18) {
  console.log(`Прости, но не сегодня, приходи через ${(18 - usersAge) * 365} дней`);
} else {
  console.log("Как говорится, Welcome");
}
//Task: "Work interview"

let employeeAge  = +prompt('Ваш возраст: ')
let employeeExp = confirm('Ваш опыт больше 3-х лет')
let employeeEng = prompt('Укажите ваш уровень английского (B1, B2, C1 или C2):').toLocaleLowerCase();

let result = 0;

switch (employeeEng) {
    case 'c2':
        result += 5; 
        break;
    case 'c1': 
        result += 4;
        break;
    case 'b2':
        result += 3;
        break;
    case 'b1':
        result += 2;
        break;
    default:
        result += 1;
}

result += employeeExp ? 5 : 2;

if(employeeAge >= 30){
    result += 5;
}else if (employeeAge < 18){
    result += 0;
}else{
    result += 2;
}

if(result === 15){
    console.log('Вы прошли!')
}else if(result < 15 && result >= 12){
    console.log('Вы прошли, но на меньшую зарплату')
}else if(result < 12 && result >= 8){
    console.log('"Мы вам перезвоним"')
}else{
    console.log('До свидания')
}