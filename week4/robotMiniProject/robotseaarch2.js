const root = document.getElementById('root')
const h1 = document.createElement('h1')
const h1Text = document.createTextNode('We Are The Robot Friends')
h1.appendChild(h1Text)
root.appendChild(h1)
//creating the navbar
const nav = document.createElement('div')
nav.className = 'navbar bg-primary px-3'
const navH3 = document.createElement('h3')
const h3Text = document.createTextNode('ROBOFRIENDS')
const searchLabel = document.createElement('label')
const searchInput = document.createElement('input')
searchInput.setAttribute('placeholder', 'search for robo friends')
searchLabel.appendChild(searchInput)
navH3.appendChild(h3Text)
nav.appendChild(navH3)
nav.appendChild(searchLabel)
root.appendChild(nav)
//end of navbar



let robots ;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json'
xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) {
// analyze HTTP status of the response
// e.g. 404: Not Found
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { // show the result
         robots = xhr.response
        console.log(robots)
        for (let robot of robots) {
            buildCard(robot)
        }
    }
};

console.log(robots)

// const robots = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         image: 'https://robohash.org/1?200x200'
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         image: 'https://robohash.org/2?200x200'
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         image: 'https://robohash.org/3?200x200'
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         image: 'https://robohash.org/4?200x200'
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         image: 'https://robohash.org/5?200x200'
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         image: 'https://robohash.org/6?200x200'
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         image: 'https://robohash.org/7?200x200'
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         image: 'https://robohash.org/8?200x200'
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         image: 'https://robohash.org/9?200x200'
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         image: 'https://robohash.org/10?200x200'
//     }
// ];
const containerDiv = document.createElement('div')
containerDiv.className = 'container'

const divRow = document.createElement('div')
divRow.className = 'row'

// const col = document.createElement('div')
// col.className='col'

const buildCard = (robot) => {

    const card = `<div class="col">
    <div class="card">
        <img src="https://robohash.org/${robot.id}?size=200x200" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${robot.name}</h5>
            <p class="card-text">${robot.username}</p>
            <a href="#" class="btn btn-primary">${robot.email}</a>
        </div>
    </div>
</div>`
    const ele = document.createElement('div');
    ele.innerHTML = card;
    divRow.appendChild(ele.firstChild)
}


let allCol = document.getElementsByClassName('card')
console.log(allCol)


const addAndResetRobot = () => {
    while (allCol.length !== 0) {
        for (let card of allCol) {
            card.remove()
            console.log(allCol.length)
        }
    }
    for (let robot of robots) {
        let robotLowCase = robot.name.toLowerCase()
        robotLowCase.split(' ')
        for (let name of robotLowCase) {
            if (name.indexOf(searchInput.value.toLowerCase()) !== -1) {
                buildCard(robot)
                console.log(robot)
                break;
            }
        }
    }

}
searchInput.addEventListener('keyup', addAndResetRobot)
containerDiv.appendChild(divRow)
root.appendChild(containerDiv)



