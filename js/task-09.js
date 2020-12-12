// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   // твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log("Задание 9");

import users from "./users.js";
// console.log(users);

const getNamesSortedByFriendsCount = (users) => {
  const userNames = users.reduce((userNameSorts, user, index) => {
    userNameSorts.push({
      name: user.name,
      friends: user.friends.length,
    });

    return userNameSorts;
  }, []);

  const userSort = (a, b) => a.friends - b.friends;
  userNames.sort(userSort);

  const sortedArray = userNames.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
  }, []);

  return sortedArray;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
