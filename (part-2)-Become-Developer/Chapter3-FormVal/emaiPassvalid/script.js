let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("form");
let emailError = document.querySelector(".emailError");
let passError = document.querySelector(".passError");
let resultMessage = document.querySelector("#resultMessage");


form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    const emailAns = emailRegex.test(email.value);
    const passAns = passwordRegex.test(pass.value);
    let isValid = true;

    console.log("Passans: " , passAns);
    console.log("email: " , emailAns);
    if(!emailAns){
        emailError.innerText = "Invalid Email Format";
        isValid = false;
    }
    
    if(!passAns){
        passError.innerText = "Password must be at least 8 characters";
        isValid = false;
    }

    if(isValid){
        resultMessage.innerText = "Form submitted successfully!";
    }

})  
