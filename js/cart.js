let cartItems = JSON.parse(localStorage.getItem("cartitems"));
console.log(cartItems);
let total = cartItems.reduce((acc, ele) => acc + Number(ele.price), 0);
let search=document.querySelector("#searchip");
let sbutton=document.querySelector("#searchimg");
document.querySelector("#cart-total").innerHTML = total;
// sbutton.addEventListener("click",()=>{
//   let x=search.value;
//   // console.log(x);
//   let sdata = cartItems.filter(ele => {
//     return ele.name.toLowerCase().includes(x.toLowerCase());
//   })
//   displayCard(sdata);
// })
displayCard(cartItems);
function displayCard(bag) {
  // document.querySelector("product-container").innerHTML="";
  bag.forEach((element, index) => {
    console.log(element,index);
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
    let dec = document.createElement("button");
    dec.innerText = "-";
    let sb = document.createElement("span");
    sb.innerText = 1;
    let inc = document.createElement("button");
    inc.innerText = "+";
    div.append(image, name, type,  price,offer,dec,sb,inc);
    document.querySelector(".main").append(div);
  });
}
