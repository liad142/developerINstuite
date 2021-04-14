//EXERCISE XP

//EXERCISE 1
// let age = prompt('what is your age')
// function checkDriverAge(age){
//     if(age<18){
//         alert('Sorry, you are too young to drive this car. Powering off')
//     } else if (age = 18){
//         alert('Congratulations on your first year of driving. Enjoy the ride!')
//     }else alert('You are old enough to drive, Powering On. Enjoy the ride!')
// }
// checkDriverAge(age)

//EXERCISE 2
// let item = 10;
// let change = [Quarters  = 0.25, Dimes = 0.10, Nickels = 0.05, Pennies = 0.01]

//EXERCISE 3
// Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.
// function multply23() {
//     let sum = 0
//     for (let i = 0; i <=500; i++) {
//         if (i % 23 === 0) {
//             console.log(i)
//             sum += i
//         }
//     }
//     console.log(sum)
//     return sum
//
// }
// multply23()

//EXERCISE 4
// Create a function called checkBasket().It should: prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
//
// function checkBasket() {
//     let userItem = prompt('please write an item')
//     for (const item in amazonBasket) {
//         if (userItem === item) {
//             return alert('yes')
//         } else if (userItem !== item) {
//             return alert('no')
//         }
//     }
// }
// checkBasket()

//EXERCISE 5
// let stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }
// let prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }
// let shoppingList = ['banana', 'apple', 'orange']
// function myBill() {
// let sum  = 0
//     for (let i of shoppingList){
//         if(i in stock){
//             stock[i] > 0 ? sum+=prices[i] : console.log(`sorry we out of ${i}`)
//             stock[i] = stock[i]-1
//         }
//     }
//     return sum
// }
// console.log(myBill())

//EXERCISE 6
// let answerBill = prompt('how much is the bill')
// function tipCal(){
//     let tipAmount = 0
//     let finalBill = 0
//     if(answerBill<50){
//         tipAmount =  answerBill*0.2
//         console.log(tipAmount)
//     }else if(answerBill>200){
//         tipAmount = answerBill*0.1
//         console.log(tipAmount)
//     }else {
//         tipAmount = answerBill*0.15
//         console.log(tipAmount)
//     }
//     finalBill = tipAmount + answerBill
//     console.log(finalBill)
//     return tipAmount
// }
// tipCal()

//EXERCISE 7
// const hotelCost =()=> {
//     let nights = prompt('how many nights are u staying ?')
//     let nightPrice = 140;
//     let total = 0
//     for(let i=0 ;i<nights;i++){
//         if (nights === '0' || nights === '') {
//             prompt('how many nights are u staying ?')
//         } else return total = nightPrice * nights
//     }
// }
// hotelCost()
//
// const planeRideCost = () => {
//     let destination = prompt('where are you traveling at ?')
//     if (destination === 'london') {
//         alert(`the price to london is 183$`)
//     } else if (destination === 'paris') {
//         alert(`the price to paris is 220$`)
//     } else alert(`the price is 300$ to ${destination}`)
// }
// planeRideCost()
//
// const rentalCarCost = () =>{
// let rentDays=prompt('how many days you want the car?')
//     if(rentDays == 0 || rentDays == NaN){
//
//     }
// }
// rentalCarCost()
