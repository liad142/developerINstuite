//bubbleSort
// let arr =[5,0,9,1,7,4,2,6,3,8]
// let bubbleSort = (arr) => {
//     let len = arr.length;
//     debugger
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     return arr;
// };
// bubbleSort(arr)
//EXERCISE XP

//EXERCISE XP

//EXERCISE 1
//Create a one line function that receives two numbers as parameters and returns the sum.
// const returnSum = (a,b) => a+b
// returnSum(2,2)

//EXERCISE 2
//Analyse the code below, and before executing it, predict the outcome of the last line.
// const addTo = x => y => x + y;
// let addToTen = addTo(10);
// addToTen(3); // 13

//EXERCISE 3
//Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) // 31

//EXERCISE 4
//Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) // 17

//EXERCISE 5
//Analyse the code below, and before executing it, predict the outcome of the last line.
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10) // 16

// Daily Challenge
//Copy this object using the method that was taught in today’s lesson.
// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?
// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// שיטה ישנה להעתיק את האובייקט
// let obj2 = Object.assign({},groceries)
// console.log(obj2)
// שיטה חדשה להעתיק את האובייקט
// let obj = {...groceries}
// // console.log(obj)
// let newObj = JSON.stringify(groceries)
//  let newObject = JSON.parse(newObj)
// // console.log(newObject)
// console.log(newObject)
// // console.log(newObj)
// groceries.totalPrice = '35$'
// groceries.other.payed = 'false'
// console.log(groceries)

