// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.log("Задание 8");

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, user) => {
    if (user.friends.includes(friendName)) {
      acc.push(user.name);
    };
    return acc;
  }, []);
};

// const getUsersWithFriend = (users, friendName) =>
//   users.reduce((haveFriends, user) => {
//     if (user.friends.find((friend) => friend === friendName)) {
//       haveFriends.push(user.name);
//     }
//     return haveFriends;
//   }, []);

// users.reduce((haveFriends, user) => {
//   for (const friend of user.friends) {
//     if (friend === friendName) {
//       haveFriends.push(user.name);
//     }
//   }
//   return haveFriends;
// }, []);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
