let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
let url = "https://636c8b56ad62451f9fccb3e7.mockapi.io/fragrance";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      bag = data;
    //   console.log(bag);
      displayCard(bag);
    });



  function displayCard(bag) {
    document.querySelector(".main").innerHTML="";
    bag.forEach(element => {
      //   console.log(element);
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.setAttribute("src", element.image);
      let name = document.createElement("h4");
      name.innerText = element.name;
      let price = document.createElement("h5");
      price.innerText = element.price;
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
          let count=0;
          for (key in cart) {
            if (cart[key].id == element.id) { 
              count++;
              break;
            }
            
          }
          if(count!=0){
            alert("Product Already in Cart");
          }
          else {
              cart.push(element);
              localStorage.setItem("cartitems", JSON.stringify(cart));
              alert("Product Added To Cart");
            }
        }


      })
      div.append(image, name, type,  price,offer, btn);
      document.querySelector(".main").append(div);
    });
  }