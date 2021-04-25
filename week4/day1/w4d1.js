//EXERCISE XP
//EXERCISE 1
//What is the value of a in all the following functions.
//#1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// console.log(q1()) // 3

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }
// function q22() {
//     alert(a);
// }
//
// console.log(q22()) // 0

//#3
// function q3() {
//     window.a = "hello";
// }
// function q32() {
//     alert(a);
// }
// console.log(q32()) // error
// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// console.log(q4()) // test
// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a); // 5

//EXERCISE 2
// Change the conditional into a ternary and assign the function to a variable called experiencePoints.
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// const a = winbattle() ?  10 :  1

//EXERCISE 3
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const displayColor = () =>{
//     colors.forEach((color,i) => {
//         console.log(`${i}# choice is ${color}`)
//     })
// }
// displayColor()

//EXERCISE 4
//Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// function displayColor2(){
// color.forEach((coloring,i)=>{
//     if(i===1){
//         console.log(`${i++}${ordinal[1]} choice is ${coloring}`)
//     } else if (i===2){
//         console.log(`${i++}${ordinal[2]} choice is ${coloring}`)
//     }else if(i===3){
//         console.log(`${i++}${ordinal[3]} choice is ${coloring}`)
//     }else if (i>3){
//         console.log(`${i++}${ordinal[0]} choice is ${coloring}`)
//     }
// })
// }
// displayColor2()

//EXERCISE 5
//Write a JavaScript function that checks whether the value of an input is a string or not.
// const isString = (x) => {
//     return typeof x === 'string';
// }
// isString('im string')

//EXERCISE 6
//Create a global variable called bankAmount which value is the amount of money currently in your account.
// let bankAmount = 300;
//Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// let vat = 0.17
//Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// let details = [+200, -100, +146, +167, -2900]
//
// const includTax = () => {
//     let sum = 0
//     details.forEach((item,i)=>{
//        sum += item * vat
//         console.log(sum)
//     })
// }
// includTax()
