// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();
// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// // 3. Send the request over the network
// xhr.send();
// xhr.onload = function() {
//     if (xhr.status != 200) {
//         // analyze HTTP status of the response
//         // e.g. 404: Not Found
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else { // show the result
//         // response is the server response
//         // console.log(`Done, got ${xhr.response.length} bytes`);
//         console.log(xhr.response);
//     }
// };
// // xhr.onprogress = function(event) {
// //     if (event.lengthComputable) {
// //         console.log(`Received ${event.loaded} of ${event.total} bytes`);
// //     } else {
// //         console.log(`Received ${event.loaded} bytes`); // no Content-Length
// //     }
// // };
// // xhr.onerror = function() {
// //     console.log("Request failed");
// // };
// // const data = null;
// //
// // const xhr = new XMLHttpRequest();
// // xhr.withCredentials = true;
// //
// // xhr.addEventListener("readystatechange", function () {
// //     if (this.readyState === this.DONE) {
// //         console.log(this.responseText);
// //     }
// // });
// //
// // xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric");
// // xhr.setRequestHeader("x-rapidapi-key", "41112e74e2msha5967381afd73b2p145c92jsn9dda71c6c164");
// // xhr.setRequestHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
// //
// // xhr.send(data);


//EXERCISE XP

//EXERCISE 1
// let xhr = new XMLHttpRequest();
// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
// xhr.responseType = 'json'
// // 3. Send the request over the network
// xhr.send();
// xhr.onload = function () {
//     if (xhr.status != 200) {
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else { // show the result
//
//         let gifObj = xhr.response.data
//         for(let i =2 ; i < 12 ;i++){
//             console.log(gifObj[i])
//         }
//
//     }
// };

//EXERCISE 2
// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

//Daily Challenge

const container = document.querySelector('.container')
const data = () =>{
    const searchField = document.getElementById('search').value
    let xhr = new XMLHttpRequest();
// 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${searchField}&rating=g&limit=3&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.responseType = 'json'
// 3. Send the request over the network
    xhr.send();
    xhr.onload =  () => {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { // show the result
            let res = xhr.response
            postGifs(res)
        }
    };
}
const postGifs = (res) => {
    container.HTML = '';
    const myData = res.data

    const map = myData.forEach((item)=>{
        const div = document.createElement('div')
        const img = document.createElement('img')
        img.setAttribute('src',`${item.images.original.url}`)
        img.setAttribute('width','250')
        const btn = document.createElement('button')
        btn.addEventListener('click',()=>{
            div.remove()
        })
        btn.innerText='delete'
        div.appendChild(img)
        div.appendChild(btn)
        container.appendChild(div)
    })
    const btnAll = document.createElement('button')
    btnAll.innerText='deleteAll'
    container.appendChild(btnAll)
    btnAll.addEventListener('click',()=>{
        container.innerHTML = '';
    })


}
