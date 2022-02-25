const listEmail = ["tizio@gmail.com", "caio@gmail.com", "tiziocaio@gmail.com", "chissene@gmail.com", "cesco@gmail.com", "esco@gmail.com", "lostingoogle@gmail.com"];

const inputEmail = document.getElementById("input-email");
let emailHelp = document.getElementById("email-help");

function myFunction() {
    for (let i = 0; i < listEmail.length; i++) {
        if (inputEmail.value == listEmail[i]) {
            emailHelp.classList.add("text-success");
            emailHelp.innerHTML = "la tua email è corretta";
            break
        } else {
            emailHelp.classList.add("text-warning");
            emailHelp.innerHTML = "la tua email è sbagliata";
        }
    }
}


document.getElementById("click-joke").addEventListener('click', function () {

    let numberUser = document.getElementById("number-user");
    let numberComputer = document.getElementById("number-computer");
    let resultNumber = document.getElementById("result-number");

    numberUser.innerHTML = Math.floor(Math.random() * 6) + 1;
    numberComputer.innerHTML = Math.floor(Math.random() * 6) + 1;

    if (numberUser > numberComputer) {
        resultNumber.classList.add("ms-bg-win");

    } else if (numberUser < numberComputer) {
        resultNumber.classList.add("ms-bg-lose");

    } else {
        resultNumber.classList.add("ms-bg-draw");
    }
})