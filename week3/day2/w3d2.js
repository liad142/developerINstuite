//EXERCISE XP

//EXERCISE 1
// //Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
// const removeP= document.querySelector('p:last-child')
// removeP.remove()
//
// // Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
// const h2 = document.querySelector("h2")
// h2.addEventListener('click',changeH2Color)
// function changeH2Color(){
//     h2.style.backgroundColor='red'
// }
//
// // Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
// const h1 = document.querySelector("h1")
// h1.addEventListener('click',changeFont)
// function changeFont(){
//     h1.style.fontSize = `${Math.floor(Math.random()*101)}px`
// }
//
// // Add an event listener which will hide the h3 when it’s clicked on (use the display property).
// const h3 = document.querySelector("h3")
// h3.addEventListener('click',hideH3)
// function hideH3(){
//     h3.style.display ='none'
// }
//
// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// const boldAll = () => {
//     const p = document.querySelectorAll('p')
//     for(let i =0; i<p.length;i++){
//         p[i].style.fontWeight = 'bold'
//     }
// }
// // When the “Submit” button of the form is clicked:
// // get the values of the input tags
// // make sure that they are not empty,
// // then append them to a HTML table, in the div, below the form.
// // When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// const submitFunc = ()=>{
// let firstInput = document.querySelector('#fname').value
//     // firstInput.document.createTextNode(firstInput)
//     console.log(firstInput)
// let secondInput = document.querySelector('#lname').value
//     // secondInput.document.createTextNode(secondInput)
//     console.log(secondInput)
//     if(firstInput !== '' && secondInput !== ''){
//         let div = document.querySelector('div')
//         let table = document.createElement('table')
//         let td = document.createElement('td')
//         let tr = document.createElement('tr')
//         // td.appendChild(firstInput)
//         // td.appendChild(secondInput)
//         // tr.appendChild(td)
//         // table.appendChild(tr)
//         // table.appendChild(tr)
//         // div.appendChild(table)
//         document.getElementById('userAnswer').append(firstInput)
//     }
// }

//EXERCISE 2
// // Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph)
// // and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph)
//
// //Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
// const getBoldItems = () => {
//    const strong = document.getElementsByTagName('strong')
//     console.log(strong)
// }
// getBoldItems()
// // Create a function called highlight() that changes the color of all the bold text to blue.
// const highlight = () =>{
//     const strong = document.getElementsByTagName('strong')
//     for(let i =0 ;i <strong.length;i++){
//         strong[i].style.color='blue'
//     }
// }
// highlight()
// // Create a function called return_normal() that changes the color of all the bold text back to black.
// const return_normal = () =>{
//     const strong = document.getElementsByTagName('strong')
//     for(let i =0 ;i <strong.length;i++){
//         strong[i].style.color='black'
//     }
// }
// highlight()

//EXERCISE 3
//Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// function calc(){
//     let number=document.getElementById("radius").value;
//     number=Number(number);
//     // The formula for the volume of a sphere (4. π. r*r*r )/ 3
//     let sphere=(4*Math.PI*number*number*number)/3;
//     //Cut the floating digits to two float
//     sphere =sphere .toFixed(2);
//     alert("The volume of a sphere: "+sphere);
// }
// let btnCalc=document.getElementById("submit");
// btnCalc.onclick=calc;
