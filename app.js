// https://api.tvmaze.com/

let search = document.querySelector("#search");
let add_movie = document.querySelector(".movie-cont");

search.addEventListener("keyup",(event => {
    // console.log(search.value);
    fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
    .then((response) => response.json())
    .then((data) => {
        let final = data.map(resfun => resfun.show.name);
        console.log(data);
       // console.log(resfun.show.rating.average);

        add_movie.innerHTML = "";
        final.forEach(finalname => {
            let add_div = document.createElement("div");
            add_div.classList.add("movies");
            let movies = document.querySelector(".movies");
            let rate = data.map(resfun => resfun.show.rating.average);
            let image = data.map(resfunn => resfunn.show.image.medium);
            let aboutm = data.map(resfunn => resfunn.show.summary);
            //console.log(image)
            add_div.innerHTML = `
            <img src="${image}" alt="Image" height="50%" width="100%">
                <div class="details">
                    <div class="mov-name">
                        <span>${finalname}</span>
                        <span>${rate}</span>
                    </div>
                    <div class="mov-detail">
                        <p>${aboutm}</p>
                    </div>
                </div>`;
            add_movie.appendChild(add_div)
        })
    })
    .catch((error) => {

    })
}));

// function newfunctionn() {
//     let add_div = document.createElement("div");
//     add_div.classList.add("movies");
//     let movies = document.querySelector(".movies");
//     //movies.innerHTML = "";
//     movies.innerHTML = `
//     <img src="https://images.indianexpress.com/2022/04/kgf-2-1200.jpeg" alt="Image" height="50%" width="100%">
//         <div class="details">
//             <div class="mov-name">
//                 <span>KGF 2</span>
//                 <span>5.5</span>
//             </div>
//             <div class="mov-detail">
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, modi?</p>
//             </div>
//         </div>`;
//     add_movie.appendChild(add_div)
// };