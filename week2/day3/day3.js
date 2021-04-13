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

// EXERCISE 7
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// let secretName = names.map((name) => name[0]).join(' ')
// console.log(secretName)
// let chars = [];
// for (let i = 0; i < secretName.length; i++) {
//     chars.push(secretName.charAt(i));
// }
// chars = chars.sort().join("");
// console.log(chars);

// EXERCISE XP GOLD

//EXERCISE 1
// let building = {
//     number_levels: 4,
//     number_of_apt_by_level: {
//         "1": 3,
//         "2": 4,
//         "3": 9,
//         "4": 2,
//     },
//     name_of_tenants: ["Sarah", "Dan", "David"],
//     number_of_rooms_and_rent: {
//         "Sarah": [3, 990],
//         "Dan": [4, 1000],
//         "David": [1, 500],
//     },
// }
// write the number of levels in the building.
// console.log(building.number_levels)
//write how many apartments are on levels 1 and 3.
// console.log(building.number_of_apt_by_level[1],building.number_of_apt_by_level[3])
// write the name of the second tenant and the number of rooms he has in his apartment.
// console.log(building.name_of_tenants[1],building.number_of_rooms_and_rent.Dan[0])
//Check if the sum of Sarah and David’s rent is bigger than Dan’s rent
// console.log(building.number_of_rooms_and_rent.Sarah[1]+building.number_of_rooms_and_rent.David[1] > building.number_of_rooms_and_rent.Dan[1])

//EXERCISE 2
//Loop through the array above and determine whether or not each number is divisible by three.
//Each time you loop console.log “true” or “false”
// let numbers = [123, 8409, 100053, 333333333, 7]
// for(let number of numbers){
//     if(number%3){
//         console.log(false)
//     }else console.log(true)
// }

//EXERCISE 3
// let age = [20,5,12,43,98,55];
// let total=0;
// for(let i = 0;i<age.length;i++){
//     total += age[i]
//     console.log(total)
// }

//EXERCISE XP NINJA

//EXERCISE 1
// //Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
// // Outside of the objects, create a JS function that compares the BMI of both objects.
// // Display the name of the person who has the largest BMI.
// let object1 = {
//     fullName: 'liad',
//     mass: '85',
//     height: '1.78',
//     value: function bmicheck() {
//         return object1.mass / object1.height ** 2
//     }
// }
// // console.log(object1.value())
//
// let object2 = {
//     fullName: 'eden',
//     mass: 55,
//     height: 1.65,
//     value: function bmicheck() {
//         return object2.mass / object1.height ** 2
//     }
// }
//
// // console.log(object2.value())
//
// function compare() {
//     if (object2.value() < object1.value()) {
//         console.log(object1.fullName + "has the larget BMI")
//     } else console.log(object2.fullName + "has the larget BMI")
// }
// compare(object1, object2)

//EXERCISE 2
// let grades=[11,23,56,78,90,66,45]
// function findAvg(gradesList){
//     let tot = 0
//     let sofi = 0
//     for(let i =0;i<grades.length;i++){
//         tot += grades[i]
//         sofi = tot / grades.length
//
//     }
//     if(sofi>65){
//         console.log('you pass')
//     }else console.log('you didnt pass')
//     // console.log(tot)
//     // console.log(sofi)
// }
// findAvg(grades)

