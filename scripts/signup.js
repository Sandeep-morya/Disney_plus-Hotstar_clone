document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();
    let name=e.target[0].value;
    let email=e.target[1].value;
    let phone=e.target[2].value;
    let password=e.target[3].value;
    let obj=new CreateObject(name,email,phone,password);

    let arr=JSON.parse(localStorage.getItem("userdata")) || [];
    arr.push(obj);
    localStorage.setItem('userdata',JSON.stringify(arr));
    document.querySelector('.reply').textContent+=` Successfull`
    setTimeout(function(){
        location.href="./index.html"
    },1000);
});

function CreateObject(name,email,phone,password){
    let x=name.split(' ');
    this.email=email;
    this.phone=phone;
    this.password=password;
    this.name=x[0];
}