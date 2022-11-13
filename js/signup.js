let signup_form = document.querySelector("#signup");
let LS_data = [];
signup_form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
        firstname: signup_form.first_name.value,
        lastname: signup_form.last_name.value,
        email: signup_form.email.value,
        email2: signup_form.email2.value,
        zip: signup_form.zip.value,
        mob: signup_form.mob.value,
        password: signup_form.password.value
    }

    if (obj.email == "" || obj.firstname == "" || obj.password == "" || obj.lastname == "" || obj.zip == "" || obj.number == "" || obj.email2=="") {
        alert("Please Fill All The Details")
    }
    else {
        LS_data.push(obj);
        localStorage.setItem("details", JSON.stringify(LS_data));
        alert("Successfully Signed Up")
        window.location.replace("signin_up.html");
        
    }
})