let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("ShowData");
    
    if(ul.className == "ShowData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        
        document.getElementById("bar").className= "fa-solid fa-bars";
    }
})