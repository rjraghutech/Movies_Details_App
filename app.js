// https://api.tvmaze.com/

let search = document.querySelector("#search");

search.addEventListener("keyup",(event => {
    fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then((response) => response.json())
    .then((data) => console.log(data));
}));