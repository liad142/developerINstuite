//Exercise 1
let x = 10
let y = 5
if(x>y){
    console.log(x + 'is bigger then' + y)
}else console.log(y+ 'is bigger then' + x)
//Exercise 2
let newDog = 'chihuahua'
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if(newDog ='chihuahua'){
    console.log('i love chihuahua')

}else{
    console.log('i prefer cats')
}
//Exercise 3
let number = prompt('please write a number')
if(number%2){
    console.log('number is an odd number')
}else console.log('number is an even number')
//Exercise 4
// What is the returned value when moveCommand("forward") = "you encounter a monster"
// What is the returned value when moveCommand("back") = "you arrived home"
// What is the returned value when moveCommand("right") = you found a river
// What is the returned value when moveCommand("left") = you run into a troll
//Exercise 5
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
if(users.length < 0){
    console.log('no user online')
}else if (users.length === 1){
    console.log(`${users[0]} + is online`)
}else if (users.length === 2){
    console.log(`${users[0]} + ${users[1]}+ is online`)
}else if (users.length > 2){
    console.log(`${users[0]} + ${users[1]}+ ${users[2]} + is online`)
}
