// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   // твой код
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log("Задание 4");

import users from "./users.js";
// console.log(users);

// const getInactiveUsers = (users) => {
//   const noActive = users.filter((user) => !user.isActive);

//   return noActive;
// };

const getInactiveUsers = users => users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
