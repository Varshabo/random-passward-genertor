const btnE1 = document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIconE1 = document.querySelector(".fa-copy");
const alertcontainerE1 = document.querySelector(".alert-container");

btnE1.addEventListener("click", createPassword);

copyIconE1.addEventListener("click", () => {
    if (inputE1.value) {
        navigator.clipboard.writeText(inputE1.value);

        alertcontainerE1.classList.add("active");

        setTimeout(() => {
            alertcontainerE1.classList.remove("active");
        }, 2000);
    }
});

function createPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 14;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars[randomNum];
    }

    inputE1.value = password;
}