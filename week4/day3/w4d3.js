//reverse string without reverse method
// function reverse1(str){
//     let result = "";
//     for(let i = str.length-1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }
// console.log(reverse1("word in a given String"))

// map exercise
// let users = ['eden','liad','lavie']
// const newUsers = users.map((item,i) => {
//     return item + '@gmail.com'
// })
// console.log(newUsers)

// let numbers = [0,1,2,5,6,7]
// const greaterThenThree = numbers.map((item,i)=>{
//     if (item>3){
//         return item
//     }
// })
// console.log(greaterThenThree)

//filter exercise
// const dragons = ['Tim', 'JohnsSaathan', 'Sandy', 'Sarah'];
// // get all names that start with Sa / contain Sa
//
// const includes = dragons.filter(item => item.includes('Sa'))
// console.log(includes)

// let numbers = [2, 5, 10,100]
// const sum = (arr) => {
//     let result  = 0
//     numbers.forEach(number => {
//         result += number
//     })
//     return result
// }
// console.log(sum(numbers))

//EXERCISE XP

//EXERCISE 1
//Analyze these pieces of code before executing them. What will be the outputs ?
//
// // ------1------
//
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// //['bread',"carrot", "potato",'chicken',"apple", "orange"];
// // ------2------
//
// const country = "USA";
// console.log([...country]);
// //['U','S','A']
// // ------Bonus------
//
//     let newArray = [...[,,]];
// console.log(newArray);
// //undefined?

//EXERCISE 2
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
//
// //Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// const hello = users.map(item => "hello " + item.firstName)
// console.log(hello)
//
// // Using the filter() method, congratulate only the Full Stack Residents.
// const congratulate = users.filter(item => {
//     if(item.role==='Full Stack Resident'){
//         console.log('MAZAL TOV ' + item.firstName)
//     }
// })

//EXERCISE 3
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// //1. Use the reduce() method to combine all of these into a single string.
// const singleStr = (accumulator, currentValue) => accumulator + currentValue;
// console.log(epic.reduce(singleStr))

//EXERCISE 4
// let student = [{name: "Ray", course: "Computer Science", isPassed: true},
//     {name: "Liam", course: "Computer Science", isPassed: false},
//     {name: "Jenner", course: "Information Technology", isPassed: true},
//     {name: "Marco", course: "Robotics", isPassed: true},
//     {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
//     {name: "Jamie", course: "Big Data", isPassed: false}];
// //Use the filter() method to congratulate the students that passed the course.
// const mazalTov = student.filter(item =>{
//     if(item.isPassed===true){
//         console.log('mazal tov ' + item.name +' you pass the course')
//     }
// })

//DAILY CHALLENGE

//PART 1
let inventory = [
    {id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009},
    {id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001},
    {id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983},
    {id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010},
    {id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995},
];
// //loop through the array of object and return the first car with the name “Honda*.
// const getCarHonda = (carInventory) => {
//     const honda = inventory.filter(element => {
//         return element.car_make === 'Honda'
//            console.log(`this is a ${element.car_make} ${element.car_model}from ${element.car_year} `)
//     })
//
//     // return honda[0]
// }
// console.log(getCarHonda(inventory))

//PART 2
const sortCarInventoryByYear = (carInventory) => {
    inventory.sort((a,b)=>{
        console.log(a.car_year - b.car_year)
    })
}
sortCarInventoryByYear(inventory)
