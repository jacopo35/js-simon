/*
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFunc() {
  let randomNumber = [];
 while (randomNumber.length < 5) {
    let random = getRndInteger(1, 5)
 while (randomNumber.includes(random)) {
        random = getRndInteger(1, 5)
        }
        randomNumber.push(random);
    }
    return randomNumber
}

//Generare numeri random
let randNum = randomFunc();

console.log(randNum);
const container = document.querySelector(".container");

for (let i = 0; i < randNum.length; i++) {
  container.innerHTML += randNum[i] + " ";
}
let arrayNum = []

setTimeout(() => {
 container.innerHTML = ""
setTimeout(() => {
   let arrayNum = [];
    for (let i = 0; i < 5; i++) {
   let ask = parseInt(prompt("Digita i numeri vista prima"))
        arrayNum.push(ask);
        }
    let cond = 0
    let arrayCond = []
     for (let i = 0; i < 5; i++) {
         if (randNum[i] == arrayNum[i] && !isNaN(randNum[i] && !isNaN(arrayNum[i]))) {
             cond++
             arrayCond.push(arrayNum[i])
            }
        }
     for (let i = 0; i < arrayCond.length; i++) {
          container.innerHTML = `hai indovinato ${cond} numeri`
          container2.innerHTML += arrayCond[i] + " ";
        }
        console.log(cond);
    }, 200)
}, 3000)

/*
//Indicare i numeri visti
setTimeout(() => {
 for (let i = 0; i < 5; i++) {
      let ask = parseInt(prompt(""))
       arrayNum.push(ask);
    }
}, 4000)

console.log(arrayNum);

//Dichiarare la vittoria o la sconfitta dell'utente
for (let i = 0; i < 5; i++) {
 if (randNum[i] == arrayNum[i]) {
        console.log("");
 } else {
    console.log("");
    }
    */

