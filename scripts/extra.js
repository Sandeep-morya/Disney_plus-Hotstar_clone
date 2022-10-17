let username=JSON.parse(localStorage.getItem('userdata'));

let login=document.querySelector(".login");
 login.textContent="LOGIN";

login.onclick=function(){
    document.querySelector("#signin").style.display="flex";
}
document.querySelector(".logo").onclick=function(){
    location.href="./index.html"
}
