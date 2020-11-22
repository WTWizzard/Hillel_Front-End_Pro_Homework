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
