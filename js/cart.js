let cartItems = JSON.parse(localStorage.getItem("cartitems")) || [];
let ls_price = "";
let userdetails = JSON.parse(localStorage.getItem("signindetails"))||[];
let total = cartItems.reduce((acc, ele) => acc + Number(ele.price), 0);

if (cartItems.length == 0) {
  document.querySelector(".maincontainer>h1").innerHTML = "Your Bag Is Empty";
  document.querySelector(".checkout").innerHTML = "";
}
else {
  let search = document.querySelector("#searchip");
  let sbutton = document.querySelector("#searchimg");
  document.querySelector("#cart-total").innerHTML += total;
  displayCard(cartItems);
  function displayCard(bag) {
    // document.querySelector("product-container").innerHTML="";
    bag.forEach((element, index) => {
      console.log(element, index);
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.setAttribute("src", element.image);
      let name = document.createElement("h4");
      name.innerText = element.name;
      let dollar = document.createElement("span");
      dollar.innerText = "$";
      let price = document.createElement("h5");
      price.innerText = element.price;
      let offer = document.createElement("p");
      offer.innerText = element.offer;
      let type = document.createElement("p");
      type.innerText = element.type;
      let dec = document.createElement("button");
      dec.innerText = "-";
      dec.addEventListener("click", (event) => {
        if (sb.innerText > 0) {
          sb.innerText = Number(sb.innerText) - 1;
          price.innerText = Number(price.innerText) - Number(element.price);
          document.querySelector("#cart-total").innerHTML = Number(document.querySelector("#cart-total").innerText) - Number(element.price);
        }
        if (sb.innerText == 0) {
          var clicked = event.target;
          clicked.parentElement.remove();
          bag.splice(index, 1);
          localStorage.setItem("cartitems", JSON.stringify(bag));
          displayCard(bag);
          if (JSON.parse(localStorage.getItem("cartitems")).length == 0) {
            document.querySelector(".maincontainer>h1").innerHTML = "Your Bag Is Empty";
            document.querySelector(".checkout").innerHTML = "";
          }
        }
      })
      let sb = document.createElement("span");
      sb.innerText = Number(1);
      let inc = document.createElement("button");
      inc.innerText = "+";
      inc.addEventListener("click", (event) => {
        sb.innerText = Number(sb.innerText) + 1;
        price.innerText = Number(price.innerText) + Number(element.price);
        document.querySelector("#cart-total").innerHTML = Number(document.querySelector("#cart-total").innerText) + Number(element.price);

      })
      div.append(image, name, type, dollar, price, offer, dec, sb, inc);
      document.querySelector(".main").append(div);
    });
  }
  document.querySelector("#co").addEventListener("click", () => {
    if (userdetails.length == 0) {
      alert("Please Sign In To Continue");
      window.location.replace("signin_up.html");
    }
    else {
      ls_price = document.querySelector("#cart-total").innerText;
      localStorage.setItem("price", ls_price);
      window.location.replace("checkout.html");
    }

  });
}

