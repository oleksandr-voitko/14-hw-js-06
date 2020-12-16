// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   // твой код
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

console.log("Задание 5");

import users from "./users.js";
// console.log(users);

// const getUserWithEmail = (users, email) => {
//   const findUser = users.find((user) => user.email === email);
//   return findUser;
// };

const getUserWithEmail = (users, email) => users.find((user) => user.email === email);
 
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
