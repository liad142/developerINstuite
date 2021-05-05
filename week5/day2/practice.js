let next = 0;
function fetchDAta ()  {
    let search = document.getElementById('search').value
    let limit = document.getElementById('limit').value
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=${limit}&offset=${next}`)
    xhr.responseType = 'json'
    xhr.send()
    xhr.onload = () => {
        createImg(xhr.response.data)
    }
    xhr.onerror = () => {
        alert('server is down')
    }
    next = next+Number(limit)
}

function createImg  (arr)  {
    let root = document.getElementById('root')
    root.innerHTML= ''
    arr.forEach((item,i)=>{
        let img = document.createElement('img')
        img.setAttribute('src',item.images.fixed_height.url)
        root.appendChild(img)
    })
}
function deleteAll(){
    let root = document.getElementById('root')
    root.innerHTML= ''
}
function nextImages(){
    fetchDAta()
}
