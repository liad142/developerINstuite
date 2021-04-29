//PANAGRAM FUNCTION
// const pangram = (s) => {
//
//     // Matching our string to letters in the alphabet
//     const letters = string.toLowerCase().match(/[a-z]/g);
//     // Add those letters to a Set to deduplicate
//     const alphabet = [...new Set(letters)]
//     // Assert that the length of the variable is 26
//     return alphabet.length === 26;
//
// }
// pangram('asjdqowljfnvfbnvcklxcmnjkjlcxmv')
// const str = 'asdfgHJK';
// const isPangram = (str = '') => {
//     str = str.toLowerCase();
//     const { length } = str;
//     const alphabets = 'abcdefghijklmnopqrstuvwxyz';
//     const alphaArr = alphabets.split('');
//     for(let i = 0; i < length; i++){
//         const el = str[i];
//         const index = alphaArr.indexOf(el);
//         if(index !== -1){
//             alphaArr.splice(index, 1);
//         }
//     }
//     return !alphaArr.length;
// };
// console.log(isPangram(str));

// let arr = [3, 6, 2, 56, 32, 5, 89, 32];
// let largest = arr[0];
// const largeCandesl = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (largest < arr[i] ) {
//             largest = arr[i];
//         }
//     }
//     console.log(largest);
// }
// largeCandesl(arr)

// DESTRUCTING
// const poplation = {
//     tokyo :1 ,
//     delhi : 2,
//     telaviv :3 ,
//     dateTime:{time:4,date:5}
// }
// const  {tokyo,delhi,telaviv,dateTime:{time,date}} = poplation
// console.log(tokyo,delhi,telaviv,date,time)



const users = {
    user1: {
        age: 44,
        name: 'picard',
    },
    user2: {
        age: 12,
        name: 'sisko',
    },
    user3: {
        age: 109,
        name: 'janeway',
    },
}
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map
const arr = Object.entries(users)
console.log(arr)








// EXERCISE XP

//EXERCISE 1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
//
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// //I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//EXERCISE 2
// Destructure this object inside the function.
// const displayStudentInfo =(studentObject) =>{
//     const { first , last } = studentObject
//     console.log(`Your full name is ${first} ${ last}`)
// }
// displayStudentInfo({first: 'Elie', last:'Schoppik'})

//EXERCISE 3
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// //Using methods taught in class, turn the users object into an array
// let arr =Object.entries(users)
// console.log(arr)
// //Modify the outcome of part 1, by multipling the user’s ID by 2.
// console.log(  arr[1][1]*2)

//EXERCISE 4
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const member = new Person('John');
// console.log(typeof member); // OBJECT

//EXERCISE 5
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// }
//
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// }

