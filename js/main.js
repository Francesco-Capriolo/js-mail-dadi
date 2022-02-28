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

const numberUserElem = document.getElementById("number-user");
const numberComputerElem = document.getElementById("number-computer");
const resultNumberElem = document.getElementById("result-number");

document.getElementById("click-joke").addEventListener('click', function () {

    resultNumberElem.classList.remove("ms-bg-draw", "ms-bg-win", "ms-bg-lose")

    let numberUser = Math.floor(Math.random() * 6) + 1;
    let numberComputer = Math.floor(Math.random() * 6) + 1;

    numberUserElem.innerHTML = numberUser;
    numberComputerElem.innerHTML = numberComputer;

    if (numberUser == numberComputer) {
        resultNumberElem.classList.add("ms-bg-draw");

    } else if (numberUser > numberComputer) {
        resultNumberElem.classList.add("ms-bg-win");

    } else {
        resultNumberElem.classList.add("ms-bg-lose");
    }

})