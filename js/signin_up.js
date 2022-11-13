let signin_form = document.querySelector("#signinform");
let data = JSON.parse(localStorage.getItem("details"));
signin_form.addEventListener("submit", function (e) {
    e.preventDefault();
    let em = signin_form.email.value;
    let pass = signin_form.password.value;
    if (em == "" || pass == "") {
        alert("Enter All The Details")
    }
    else {
        let flag = 0;
        for (i = 0; i < data.length; i++) {
            if (data[i].email === em && data[i].password === pass) {
                flag = 1;
            }
        }
        if (flag == 1) {
            window.location.replace("index.html");
            alert("Sign in Successful")
        }
        else {
            alert("Wrong Credentials")
        }
    }
    
})
