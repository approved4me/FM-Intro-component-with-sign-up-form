const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    
    if (email.value === "" || email.value == null || (!email.value.match(pattern))) {
        e.preventDefault();
        email.classList.add("error");
        email.nextElementSibling.classList.remove("hide");
    }

    if (firstName.value === "") {
        e.preventDefault();
        firstName.classList.add("error");
        firstName.nextElementSibling.classList.remove("hide");
    }

    if (lastName.value === "") {
        e.preventDefault();
        lastName.classList.add("error");
        lastName.nextElementSibling.classList.remove("hide");
    }

    if (password.value === "") {
        e.preventDefault();
        password.classList.add("error");
        password.nextElementSibling.classList.remove("hide");
    }

    

});
