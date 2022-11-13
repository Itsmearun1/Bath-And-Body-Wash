let checkout_form = document.querySelector("#checkoutform");
let LS_data2 = [];
checkout_form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
        name: checkout_form.name.value,
        address: checkout_form.address.value,
        city: checkout_form.city.value,
        state: checkout_form.state.value,
        zip: checkout_form.zip.value,
        phone: checkout_form.phone.value,
    }

    if (obj.name == "" || obj.address == "" || obj.city == "" || obj.zip == "" || obj.phone == "" || obj.email=="") {
        alert("Please Fill All The Details")
    }
    else {
        LS_data2.push(obj);
        localStorage.setItem("checkout_data", JSON.stringify(LS_data2));
        window.location.replace("payment.html");
    }
}) 