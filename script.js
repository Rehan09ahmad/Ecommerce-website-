let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("ShowData");

  if (ul.className == "ShowData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contact = document.getElementById("contact");

shops.addEventListener("click", () => {
  shops.style.color = "#00ffff";
  reviews.style.color = "white";
  blogs.style.color = "white";
  contact.style.color = "white";
});

reviews.addEventListener("click", () => {
  reviews.style.color = "#00ffff";
  shops.style.color = "white";
  blogs.style.color = "white";
  contact.style.color = "white";
});

blogs.addEventListener("click", () => {
  blogs.style.color = "#00ffff";
  reviews.style.color = "white";
  shops.style.color = "white";
  contact.style.color = "white";
});

contact.addEventListener("click", () => {
  contact.style.color = "#00ffff";
  blogs.style.color = "white";
  reviews.style.color = "white";
  shops.style.color = "white";
});

// card js

let crd = document.querySelectorAll(".crd");
let ItemPage = document.querySelector(".ItemPage");
let containar = document.querySelector(".containar");
let itemImg = document.getElementById("itemImg");
let BuyBtn = document.getElementById("BuyBtn");

console.log(crd);

crd.forEach(function (curValue) {
  curValue.addEventListener("click", function () {
    ItemPage.style.display = "flex";
    containar.style.display = "none";

    let imgsrc = curValue.firstElementChild.src;
    itemImg.src = imgsrc;

    BuyBtn.addEventListener("click", function () {
      document.querySelector(".Buypage").style.display = "block";
      document.querySelector(".BuyText").innerHTML = `
            <h3>Enter Details :</h3>
        <input type="text" placeholder="Enter Your Name" id="name"> <br>
        <input type="text" placeholder="Enter Your Address" id="address"> <br> 
        <input type="text" placeholder="Enter Your Mobile Number" id="number"> <br>
        <h3>Payment Option :</h3>
        <select>
          <option value="Easypaisa">Easypaisa</option>
          <option value="jazzCash">jazzCash</option>
          <option value="SadaPay">SadaPay</option>
          <option value="Cash-on-delivery">Cash-on-delivery</option>
        </select> <br>

            `;
      let BuyText = document.querySelector(".BuyText");

      let button = document.createElement("button");
      button.innerText = "Submit";
      BuyText.appendChild(button);

      button.addEventListener("click", function (){
        let name = document.getElementById("name");

        if(name.value == "" && address.value == "" && number.value == ""){
            alert("Please Enter Your Detail")
        }else{
            alert("Your Response Recorded");
            document.querySelector(".Buypage").style.display = "none";
        }
      })

      let cross = document.querySelector(".cross");
      cross.addEventListener("click", function () {
        document.querySelector(".Buypage").style.display = "none";
      });
    });
  });
});


// connect


function connect(){
    let names = document.getElementById("names");
    let num = document.getElementById("number");
    if(names.value == "" && num.value == ""){
        alert("Fill Detail")
    }else{
        alert("Thanks for Connecting")
    }
}
