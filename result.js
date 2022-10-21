import { setup, login_page, working } from "./scripts/navbar.js";
/*---------- Navbar setup import ------------*/
setup();

document.querySelector("#signin").innerHTML = login_page();
working();

let title_name = localStorage.getItem("request");
let loader = document.querySelector(".loader2");
let input_box = document.querySelector(".input_box");
let set=document.querySelector('.set');
let m=false;
set.addEventListener('click',function(e){
  if(m){
    set.style.background='#1F80E0';
    m=false;
  }else{
    set.style.background='red';
    m=true;
  }
})

if (title_name != "") getData(title_name);

/*---------- async Function  -----------*/
function getData(title_name) {
  document.querySelector(".query").textContent = title_name;
  const moviesArr = async (x) => {
    try {
      let temp = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d07a0aca26cbc2a87b8db46242e46675&query=${x}`
      );
      let res = await temp.json();
      appendMovies(res.results);
      //.log(res.Search)
    } catch (error) {
      let h1 = document.createElement("h1");
      h1.textContent = "No Results Found";
      document.querySelector("#append-movies").append(h1);
    }
  };
  moviesArr(title_name);
}
/*---------- constructor Function / Class  -------------*/

function CreateObject(image, title, release, rating) {
  (this.image = image),
    (this.title = title),
    (this.release = release),
    (this.rating = rating);
}

/*---------- Movies Appending Function  -----------*/

function appendMovies(arr) {
  let movies_data = [];
  document.querySelector("#append-movies").innerHTML = null;
  arr.forEach((el) => {
    // Poster,Title,Type,Year
    let x = `https://image.tmdb.org/t/p/w342${el.poster_path}`;
    let div = document.createElement("div");
    div.className = "card";
    let img = document.createElement("img");
    img.src = x;

    let movie_des = document.createElement("div");
    movie_des.className = "movie-des";

    let rating = document.createElement("p");
    rating.className = "rating";
    rating.textContent = el.vote_average;

    let year = document.createElement("p");
    year.textContent = el.release_date;
    year.id = "release";

    let title = document.createElement("h3");
    title.textContent = el.title;
    title.className = "movie_title";

    movie_des.append(title, year, rating);
    div.append(img, movie_des);

    document.querySelector("#append-movies").append(div);

    let obj = new CreateObject(x, el.title, el.release_date, el.vote_average);
    movies_data.push(obj);
  });
  localStorage.setItem("request", "");
  localStorage.setItem("result", JSON.stringify(movies_data));
}

/*---------- oninput Event Listner -----------*/
input_box.oninput = (e) => {
  loader.style.display = "block";
  if (e.target.value) {
    debucing(loader, getData, 1000, e.target.value);
  } else {
    loader.style.display = "none";
    document.querySelector(".query").textContent = "";
  }
};

/*----------- Debouncing is Happening -----------*/
let id;
function debucing(loader, func, delay, e) {
  if (id) clearTimeout(id);
  id = setTimeout(() => {
    loader.style.display = "none";
    func(e);
  }, delay);
}

/* ---------------  Sorting by Rating-------------- */
document.querySelector("#rating").addEventListener("change", (e) => {
  let arr = JSON.parse(localStorage.getItem("result")) || [];
  if (e.target.value == "l2h") {
    arr.sort((a, b) => a.rating - b.rating);
  }
  if (e.target.value == "h2l") {
    arr.sort((a, b) => b.rating - a.rating);
  }
  sortedMovies(arr);
});

/* ---------------  Sorting by Release Date -------------- */
document.querySelector("#release").addEventListener("change", (e) => {
  let arr = JSON.parse(localStorage.getItem("result")) || [];
  if (e.target.value == "oldest") {
    arr.sort((a, b) => a.release - b.release);
  }
  if (e.target.value == "latest") {
    arr.sort((a, b) => b.release - a.release);
  }
  sortedMovies(arr);
});

/* ---------------  Sorting by Title -------------- */
document.querySelector("#title_name").addEventListener("change", (e) => {
  let arr = JSON.parse(localStorage.getItem("result")) || [];
  if (e.target.value == "z2a") {
    arr.sort((a, b) => (a.title > b.title ? -1 : a.title < b.title ? 1 : 0));
  }
  if (e.target.value == "a2z") {
    arr.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0));
  }
  sortedMovies(arr);
});
/* ----------------- new append Function ---------------*/
function sortedMovies(arr) {
  document.querySelector("#append-movies").innerHTML = null;
  arr.forEach((el) => {
    // Poster,Title,Type,Year
    let div = document.createElement("div");
    div.className = "card";
    let img = document.createElement("img");
    img.src = el.image;

    let movie_des = document.createElement("div");
    movie_des.className = "movie-des";

    let rating = document.createElement("p");
    rating.className = "rating";
    rating.textContent = `Rating : ${el.rating}`;

    let year = document.createElement("p");
    year.textContent = el.release;
    year.id = "release";

    let title = document.createElement("h3");
    title.textContent = el.title;
    title.className = "movie_title";

    movie_des.append(title, year, rating);
    div.append(img, movie_des);

    document.querySelector("#append-movies").append(div);
  });
}
let count = 1;
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    movies2(input_box.value,++count,m)
  }

  
};

async function movies2(x,y,z){
  try {
    let temp = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d07a0aca26cbc2a87b8db46242e46675&query=${x}&page=${y}&include_adult=${z}`
    );
    let res = await temp.json();
    moreMovies(res.results);
    //.log(res.Search)
  } catch (error) {
    let h1 = document.createElement("h1");
    h1.textContent = "No Results Found";
    document.querySelector("#append-movies").append(h1);
  }
};

function moreMovies(arr) {
  arr.forEach((el) => {
    // Poster,Title,Type,Year
    let x = `https://image.tmdb.org/t/p/w342${el.poster_path}`;
    let div = document.createElement("div");
    div.className = "card";
    let img = document.createElement("img");
    img.src = x;

    let movie_des = document.createElement("div");
    movie_des.className = "movie-des";

    let rating = document.createElement("p");
    rating.className = "rating";
    rating.textContent = el.vote_average;

    let year = document.createElement("p");
    year.textContent = el.release_date;
    year.id = "release";

    let title = document.createElement("h3");
    title.textContent = el.title;
    title.className = "movie_title";

    movie_des.append(title, year, rating);
    div.append(img, movie_des);

    document.querySelector("#append-movies").append(div);
  });
}