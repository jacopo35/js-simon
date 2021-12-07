/*
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Funzioni generali

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFunc(length) {
    let randomNumber = [];

    while (randomNumber.length < length) {
        let random = getRndInteger(1, 100)
        while (randomNumber.includes(random)) {
            random = getRndInteger(1, 100)
        }
        randomNumber.push(random);
    }
    return randomNumber
}


//Creao, tramite le funzioni, numeri randomici

const button = document.querySelector("button")

button.addEventListener("click", function () {

  const level = document.getElementById("level")
  const levelSelect = level.value

   let randNum = randomFunc();


 switch (levelSelect) {
    default:
    case "easy":
        randNum = randomFunc(5);

    case "medium":
        randNum = randomFunc(10);

    case "hard":
        randNum = randomFunc(15);
    }

    console.log(randNum);
    const container = document.querySelector(".container");

    for (let i = 0; i < randNum.length; i++) {
        container.innerHTML += randNum[i] + "";
    }

  let second = 5

  setTimeout(() => {
     container.innerHTML = ""
    const timer = setInterval(() => {
         if (second > 0) {
            container.innerHTML = `occhio ai numeri...mancano pochi secondi per memorizzarli! ${second}`
            second--
            } else {
            clearInterval(timer)
            container.innerHTML = "START"
            setTimeout(() => {
                let arrayNum = []; 
                let cond = 0;
                let arrayCond = [];
                 for (let i = 0; i < randNum.length; i++) {
                      let ask = parseInt(prompt("Metti un numero da 1 a 100"))
                    while (isNaN(ask) || ask < 0 || ask > 100) {
                          ask = parseInt(prompt("Numero errato...riprova!"))
                        }
                    while (arrayNum.includes(ask)) {
                          ask = parseInt(prompt(""))
                        }

                        arrayNum.push(ask);
                    if (randNum.includes(arrayNum[i])) {
                        cond++
                        arrayCond.push(arrayNum[i])
                        }
                    }
                    container.innerHTML = `hBravo! Hai indovinato${cond}`

                }, 200)
            }
        }, 1000)
    }, 3000)
})

