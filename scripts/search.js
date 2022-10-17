function appendMovies(array) {
  document.querySelector("#append-result").innerHTML=null;
  //// Poster,Title,Type,Year
  for(let i=0; i<4; i++){
    let result = document.createElement("div");
    result.className = "result";
    let img = document.createElement("img");
    img.className = "imageUrl";
    img.src = array[i].Poster;
    
    let details = document.createElement("p");


    let title = document.createElement("span");
    title.className = "movie_name";
    title.textContent =array[i].Title;
    let br=document.createElement("br");

    let type = document.createElement("span");
    type.className = "movie_type";
    type.textContent = `${array[i].Type} , `;

    let year = document.createElement("span");
    year.className="movie_year";
    year.textContent=array[i].Year;
    

    details.append(title, br, type,year);
    result.append(img, details);

    document.querySelector("#append-result").append(result);
  }
}
/* -----------  async function --------- */
async function movieArr(x){
  try {
    let temp = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=37f80a38&s=${x}`
    );
    let res = await temp.json();
    appendMovies(res.Search);
  } catch (error) {
    console.log("wait",error)
  }
};

let result=document.querySelector(".search-results");
let input_box=document.querySelector('.input_box');

input_box.addEventListener('blur',e=>{
  // result.style.display="none";
  e.target.value=null;
});

document.querySelector(".navbar").addEventListener('click',function(){
  result.style.display="none"
  input_box.value=null;
})

/*-------- debounce function --------*/
let id;
function debounce(func,e){
  if(id)clearTimeout(id);
  id=setTimeout(function(){
    func(e);
  },800);
}

/*--------- set Event Listner --------- */

input_box.oninput=function(e){
  result.style.display='block';
 if(e.target.value!=""){
  debounce(movieArr,e.target.value)
  localStorage.setItem("request",input_box.value)
 }else{
  result.style.display="none";
 }
}

document.querySelector(".more").onclick=function(e){
  location.href="./result.html"
}