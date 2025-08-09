let formEmail = document.querySelector(".form__email");
let formButton = document.querySelector(".form__button");
let spanError = document.querySelector(".span");
let cardSuccess = document.querySelector(".card-success");
let card = document.querySelector(".card");

console.log(cardSuccess);

formButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(formEmail.value)
    if (formEmail.value === "") {
        formEmail.classList.add("email--error");
        formEmail.placeholder = "Please enter your email";
        spanError.style.display = "block";
        cardSuccess.style.display = "none";
        card.style.display = "flex";
    } else {
        if (formEmail.validity.valid) {
            cardSuccess.querySelector(".email-dynamic").innerText = formEmail.value;
            formEmail.classList.remove("email--error");
            formEmail.placeholder = "email@company.com";
            spanError.style.display = "none";
            cardSuccess.style.display = "flex";
            card.style.display = "none";
        } else {
            formEmail.classList.add("email--error");
            spanError.style.display = "initial";
            cardSuccess.style.display = "none";
            card.style.display = "flex";
        }
    }
});

cardSuccess.addEventListener("click", () => {
    cardSuccess.style.display = "none";
    card.style.display = "flex";
});
