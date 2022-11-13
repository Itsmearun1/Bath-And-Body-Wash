
let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
let url = "https://636c8b56ad62451f9fccb3e7.mockapi.io/candles";
let bag = [];
let filter = document.querySelector("#filter");
let sort = document.querySelector("#Sort");
let search=document.querySelector("#searchip");
let sbutton=document.querySelector("#searchimg");

//Search function

sbutton.addEventListener("click",(e)=>{
  e.preventDefault()
  let x=search.value;
  console.log(x);
  let sdata = bag.filter(ele => {
    return ele.name.toLowerCase().includes(x.toLowerCase());
  })
  displayCard(sdata);
})

// Filter function

filter.addEventListener("change", () => {
  let selected = filter.value;
  let newdata = bag.filter(element => {
    return element.type.includes(selected);
  })
  displayCard(newdata);
});

// Sort Function

sort.addEventListener("change", () => {
  console.log("hey");
  let selected = sort.value;
  if (selected === "New") {
    console.log("heyyyy")

    bag.sort((a, b) => b.id - a.id);
  }
  if (selected === "LTH") {
    bag.sort((a, b) => a.price - b.price);
  }
  if (selected === "HTL") {
    bag.sort((a, b) => b.price - a.price);
  }
  displayCard(bag);
})

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    bag = data;
    displayCard(bag);
  });


// Display Function

function displayCard(bag) {
  document.querySelector(".main").innerHTML = "";
  bag.forEach(element => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    let name = document.createElement("h4");
    name.innerText = element.name;
    let price = document.createElement("h5");
    price.innerText = "$"+element.price;
    let offer = document.createElement("p");
    offer.innerText = element.offer;
    let type = document.createElement("p");
    type.innerText = element.type;
    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.addEventListener("click", () => {
      if (cart.length == 0) {
        cart.push(element);
        localStorage.setItem("cartitems", JSON.stringify(cart));
        alert("Product Added To Cart");
      }
      else {
        let count = 0;
        for (key in cart) {
          if (cart[key].name === element.name) {
            count++;
            break;
          }

        }
        if (count != 0) {
          alert("Product Already in Cart");
        }
        else {
          cart.push(element);
          localStorage.setItem("cartitems", JSON.stringify(cart));
          alert("Product Added To Cart");
        }
      }


    })
    div.append(image, name, type, price, offer, btn);
    document.querySelector(".main").append(div);
  });
}
