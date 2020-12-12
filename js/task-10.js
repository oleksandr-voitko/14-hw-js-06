// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


console.log("Задание 10");

import users from './users.js';
// console.log(users);

const getSortedUniqueSkills = users => {
  // users.reduce((userSkills, user) => {
  //   for (const userSkill of user.skills){
  //     if (!userSkills.includes(userSkill)){
  //       userSkills.push(userSkill);}
  //   }
    
  //   return userSkills.sort();
  // },[]);
  const sortedUserSkills = users.reduce((userSkills, user) => {
    user.skills.forEach(userSkill => {
      if (!userSkills.includes(userSkill)){
            userSkills.push(userSkill);
            }
    });
    
    return userSkills.sort();
  },[]);

  return sortedUserSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]