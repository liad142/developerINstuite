// EXERCISE XP

//EXERCISE 1
// let coloros = ['blue','green','red','yellow','white']
// for (let i=0;i<coloros.length;i++){
//     console.log(`my ${i} choicse is ${coloros[i]}` )
// }

// //EXERCISE 2
// let people = ["Greg", "Mary", "Devon", "James"]
// //Write code to remove “Greg” from the people array.
// people.shift()
// //Write code to replace “James” to “Jason”
// people.splice(3,1,'Jason')
// //Write code to add your name to the end of the people array
// people.push('liad')
// // Using a loop, iterate through the people array and console.log each person.
// for (let i=0;i<people.length;i++){
//     console.log(people[i])
// }
// //Using a loop, iterate through the people array and after you console.log “Jason” exit the loop
// for (let i=0;i<people.length;i++){
//     if(i === 3){
//         break;
//     }
//     console.log(people[i])
// }
// // Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// let newArray = people.slice();
// let i = 1
// newArray.splice(i,1)
// console.log(newArray)
// //Write code that console.logs Mary’s index
// console.log(people.indexOf('Mary'))
// //Write code that gives the indexOf “Foo”
// console.log(people.indexOf('Foo'))
// //Create a variable called last which value is the last element of the array.
// let last = people[people.length -1]
// console.log(last)

// EXERCISE 3
// let someNumber = prompt('please write a number')
// let itsANumber = parseInt(someNumber)
// while (itsANumber<10){
//    let newNumber = prompt('please enter number bigger then 10')
//     console.log(newNumber)
//     itsANumber = parseInt(newNumber)
// }

// EXERCISE 4
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// }
// let answer = prompt('please enter ur name')
// for (const prop in guestList) {
//     if (prop === answer) {
//         let result = `hey im ${prop} and im from ${guestList[prop]}`
//         console.log(result)
//         break;
//     } else console.log('hey i guest')
// }

// EXERCISE 5
// let family ={
//     dad : 'liad',
//     mom : 'eden' ,
//     son : 'lavi',
//     dog : 'tayson',
// }
// for(let prop in family){
//     console.log(prop)
//     console.log(family[prop])
// }

//EXERCISE 6
// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
// for (const key in details) {
//     console.log(`${key} ${details[key]}`);
// }

//EXERCISE 7
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// let secretName = names.map((name) => name[0]).join(' ')
// let chars = [];
// for (let i = 0; i < secretName.length; i++) {
//     chars.push(secretName.charAt(i));
// }
// chars = chars.sort().join("");
// console.log(chars);
