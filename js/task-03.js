// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   // твой код
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log("Задание 3");

import users from "./users.js";
// console.log(users);

const getUsersWithGender = (users, gender) =>
  users.reduce((usersArray, user) => {
    if (user.gender === gender) {
      usersArray.push(user.name);
    }
    return usersArray;
  }, []);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
