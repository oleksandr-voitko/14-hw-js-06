// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   // твой код
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log("Задание 2");

import users from "./users.js";
// console.log(users);

// const getUsersWithEyeColor = (users, color) => {
//   const usersArray = users.filter((user) => user.eyeColor === color);

//   return usersArray;
// };

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
