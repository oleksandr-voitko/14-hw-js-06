// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   // твой код
// };

// console.log(calculateTotalBalance(users)); // 20916

console.log("Задание 7");

import users from "./users.js";
// console.log(users);

// const calculateTotalBalance = (users) => {
//   const balance = users.reduce((acc, user) => (acc += user.balance), 0);

//   return balance;
// };

const calculateTotalBalance = (users) => users.reduce((acc, user) => (acc += user.balance), 0); 

console.log(calculateTotalBalance(users)); // 20916
