// const compareToTen = (num) =>{
//     let p = new Promise(function (resolve, reject) {
//         if (num > 10) {
//             resolve("greater then 10");
//         } else {
//             reject("less then 10");
//         }
//     });
//     return p
// }
// console.log(compareToTen(15))
// compareToTen(15).then((num)=>{
//     console.log(num)
// })
//     .catch((error)=>{
//         console.log(error)
//     })

// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]
//
// const makeAllCaps = (array) => {
//     return new Promise((resolve, reject) => {
//         let capsArray = array.map(word => {
//             if (typeof word === 'string') {
//                 return word.toUpperCase();
//             } else {
//                 reject('Error: not all items in the array are strings!')
//             }
//         })
//         resolve(capsArray);
//     })
// }
// makeAllCaps(['cucumber', 'tomatos', 'avocado'])
//     .then(data => {
//         return sortWords(data)
//     })
//     .then(sort => {
//         console.log(sort);
//     })
//     .catch(err => {
//         console.log('error', err);
//     })
//
//
// const sortWords = (array) => {
//     return new Promise((resolve, reject) => {
//         if (array) {
//             resolve(array.sort())
//         } else {
//             reject('somethig went wrong')
//         }
//     })
// }
// sortWords(['cucumber', 'tomatos', 'avocado'])
// .then(sort=>{
//   console.log(sort);
// })
// .catch(err=>{
//   console.log(err);
// })
//


//EXERCISE XP

//EXERCISE 1
//Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.
// const compareToTen = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num > 10) {
//             resolve("greater then 10");
//         } else {
//             reject("less then 10");
//         }
//     })
// }
// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

//EXERCISE 2
//Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
// let grades = true
// let success = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (grades) {
//                 resolve("I will get a gift");
//             } else {
//                 reject("I won't get the gift");
//             }
//         },4000 );
//     })
// }
// success()
//     .then(result => console.log('result',result))
//     .catch(error => console.log('error',error))

//EXERCISE 3
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
// const check = (num) =>{
//     return new Promise((resolve, reject) => {
//         if(num===3){
//             resolve (num,'number is 3')
//         } else {
//             reject ('Boo!')
//         }
//     })
// }
// check(5)
//     .then(result => console.log('result',result))
//     .catch(error => console.log('error',error))


//DAILY CHALLENGE
// Create two functions that use promises which can be chained.
//     The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
//     The second function called sortWords(), should sort the words in alphabetical order.
//     If the array contains anything but strings, it should throw an error.
// let arr = ['cucumber','tomatos','avocado']
// const makeAllCaps = (arr) => {
//     return new Promise((resolve, reject) => {
//       let capArray =  arr.map(word =>{
//           if(typeof word === 'string'){
//               return word.toUpperCase();
//           }else{
//               reject('some of the words arent string ')
//           }
//       })
//         resolve (capArray)
//     })
// }
// makeAllCaps(['cucumber','tomatos','avocado'])
//     .then(data => {
//         console.log('data :',data);
//     })
//     .catch(err => {
//         console.log('error :', err);
//     })
//
// const sortWords = (array) => {
//     return new Promise((resolve, reject) => {
//         if(array){
//             resolve (array.sort())
//         }else{
//             reject ('something isnt ok')
//         }
//     })
// }
// sortWords(['cucumber','tomatos','avocado'])
// .then(data=>{
//   console.log('data :', data);
// })
// .catch(err=>{
//   console.log('err :', err);
// })

//EXERCISE GOLD
// let urls = [
//     'https://swapi.dev/api/people/1',
//     'https://swapi.dev/api/people/2',
//     'https://swapi.dev/api/people/3',
//     'https://swapi.dev/api/people/4',
//
// ]
// let requests = urls.map(url => fetch(url));
// Promise.all(requests)
//
//     .then(requests => {
//         requests.forEach((request,index)=>{
//             index++
//             console.log(request)
//             console.log(index)
//         })
//     })
//
//     .catch(error =>{
//         console.log("error" + error)
//     })

