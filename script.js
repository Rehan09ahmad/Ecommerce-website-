let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("ShowData");
    console.log(ul)
})