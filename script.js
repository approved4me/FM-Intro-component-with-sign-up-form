const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value === "" || email.value == null || (!email.value.match(pattern))) {
        email.classList.add("error");
        email.nextElementSibling.classList.remove("hide");
        return false;
    }

    if (firstName.value === "") {
        firstName.classList.add("error");
        firstName.nextElementSibling.classList.remove("hide");
        return false;
    }

    if (lastName.value === "") {
        lastName.classList.add("error");
        lastName.nextElementSibling.classList.remove("hide");
    }

    if (password.value === "") {
        password.classList.add("error");
        password.nextElementSibling.classList.remove("hide");
        return false;
    }

    else {
        form.innerText = ("Thanks for your subscription!");
        form.style.fontSize = "2.5rem";
        form.style.color = "var(--primary-red)";
    }

});
