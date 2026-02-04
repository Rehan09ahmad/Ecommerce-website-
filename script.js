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

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", ()=>{
    shops.style.color="#00ffff";
    reviews.style.color="white"; 
    blogs.style.color="white";
    contacts.style.color="white"; 
});

reviews.addEventListener("click", ()=>{
    reviews.style.color="#00ffff";
    shops.style.color="white"; 
    blogs.style.color="white";
    contacts.style.color="white";
});

blogs.addEventListener("click", ()=>{
    blogs.style.color="#00ffff";
    reviews.style.color="white"; 
    shops.style.color="white";
    contacts.style.color="white"; 
});

contacts.addEventListener("click", ()=>{
    contacts.style.color="#00ffff";
    shops.style.color="white"; 
    blogs.style.color="white";
    reviews.style.color="white"; 
});
