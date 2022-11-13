let data = JSON.parse(localStorage.getItem("checkout_data"))[0];
let price = localStorage.getItem("price");
let pay_form = document.querySelector("#form1");
document.querySelector(".details>h2").innerHTML+=price;
displayCard(data);
function displayCard(bag) {
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".address").innerHTML = data.address;
    document.querySelector(".city").innerHTML = data.city;
    document.querySelector(".zip").innerHTML = data.zip;
    document.querySelector(".state").innerHTML = data.state;
    document.querySelector(".phone").innerHTML = data.phone;

}
pay_form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (pay_form.cname.value == "" || pay_form.cnumber.value == "" || pay_form.date.value == "" || pay_form.sec.value == "") {
        alert("Please Fill All The Details");
    }
    else {
        alert("Order Placed!!");
        window.location.replace("index.html");
    }
})


