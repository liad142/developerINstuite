

const data = null;
function getData () {
    let search = document.getElementById('search').value
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.open("GET", `https://covid-19-data.p.rapidapi.com/report/country/name?name=${search}&date=2020-04-01`);
    xhr.setRequestHeader("x-rapidapi-key", "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
    xhr.send(data);
    xhr.onload = function() {
        let root = document.getElementById('root')
        createDetails( xhr.response)

    }
    xhr.onerror = function() {
        alert("Please try in few minutes, server is down");
    };
}
function createDetails(arr){
    console.log(arr)
    let root = document.getElementById('root')
    root.innerHTML= ''

    let country = document.createElement('h1')
    country.innerText= `country ${arr[0].country}`

    let confirmed = document.createElement('p')
    confirmed.innerText = `confirmed: ${arr[0].provinces[0].confirmed}`

    let recovered = document.createElement('p')
    recovered.innerText = `recovered: ${arr[0].provinces[0].recovered}`

    let deaths = document.createElement('p')
    deaths.innerText =`deaths: ${arr[0].provinces[0].deaths}`

    let active = document.createElement('p')
    active.innerText = `active: ${arr[0].provinces[0].active}`


     root.appendChild(country)
     root.appendChild(confirmed)
     root.appendChild(recovered)
     root.appendChild(deaths)
     root.appendChild(active)

}
