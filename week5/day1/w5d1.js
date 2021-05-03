// BRAIN EXERCISE
//  findIntersection function return an array that
//  contain the numbers exist in both strings from the array.
// ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
//
// let array = ["1,2,5,6,7","2,5,7,8,15"]
//
// const findIntersection = (array) => {
//     let array1 = array[0].split(",");
//     let array2 = array[1].split(",");
//     let shared = array2.filter(num =>
//         array1.includes(num))
//     return shared;
//
// }
// console.log(findIntersection(["1,2,5,6,7", "2,5,7,8,15"]))

//EXERCISE XP
//Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

//EXERCISE 3
// let marioGame = {
//     detail : "An amazing game!",
//     characters : {
//         mario : {
//             description:"Small and jumpy. Likes princesses.",
//             height: 10,
//             weight: 3,
//             speed: 12,
//         },
//         bowser : {
//             description: "Big and green, Hates princesses.",
//             height: 16,
//             weight: 6,
//             speed: 4,
//         },
//         princessPeach : {
//             description: "Beautiful princess.",
//             height: 12,
//             weight: 2,
//             speed: 2,
//         }
//     },
// }
// let stringfyJson = JSON.stringify(marioGame)
// console.log(stringfyJson)
// // nested objects are also converted

//EXERCISE DAILY CHALLENGE
// function getJson(){
//     let frm = document.getElementById('myForm')
//     frm.addEventListener('submit',e=>{
//         e.preventDefault()
//     })
//     let firstName = frm.elements.fname.value
//     console.log(firstName)
//     let lasttName = frm.elements.lname.value
//     console.log(lasttName)
//     let obj ={fname:'firstName',lname:'lasttName'}
//     console.log(JSON.stringify(obj))
// }
/////////////////////
let frm = document.getElementById('myForm')

/// maybe not work...
function isValid() {
    if (frm.elements.lname.value !== '' && frm.elements.lname.value !== '') return true
    return false
}
function getJson() {
    frm.addEventListener('submit', e => {
        e.preventDefault()
    })
    let firstName = frm.elements.fname.value

    let lasttName = frm.elements.lname.value
    
    let obj = { fname: firstName, lname: lasttName }
    console.log(JSON.stringify(obj))

    // clean input after submit
    frm.elements.lname.value='';
    frm.elements.fname.value='';
}

