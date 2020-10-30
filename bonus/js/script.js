/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

//empty array to fill on
var bombs = [];
var userNumbers = [];
var numberBombMatch = false;
var numberInvalid = false;
var PunteggioUtente;

//pushing random numbers (1 to 100) through a loop 16 times
while (bombs.length < 16) {
  var rndmNumb = Math.round(Math.random() * 100) + 1;
  if (bombs.includes(rndmNumb) === false) bombs.push(rndmNumb);
}

console.log("Numeri bomba del pc ", bombs);
console.log("Tot numeri bomba: ", bombs.length);

//asking input numbers between 1 to 100 (84 times max) Loop max 84 times
var i = 0;
var mintr = false;
while (userNumbers.length < 84 && mintr === false) {
  var askNumber = parseInt(prompt("Inserisci numero da 1 a 100"));

  console.log(askNumber);

  if (bombs.includes(askNumber) === true) {
    console.log("Il numero " + askNumber + " è una Bomba");
    mintr = true;
  } else if (askNumber === 0 || askNumber > 100) {
    alert("Range fuori");
    break;
  } else if (isNaN(askNumber)) {
    alert("Non è un numero!!!");
  }
  // checking unique value
  else if (userNumbers.includes(askNumber) == true) {
    alert("Hai già usato questo numero, riprova !");
  } else {
    // push input values in array
    userNumbers.push(askNumber);
    console.log("Numeri: ", userNumbers);
  }
  i++;
}

// final score
alert("Hai cumulato un totale di : " + --i + " punti");
location.reload();

// function level difficulty
function mineField(min, max) {
  while (bombs.length < 16) {
    var rndmNumb = Math.round(Math.random() * 100) + 1;
    if (bombs.includes(rndmNumb) === false) bombs.push(rndmNumb);
  }
  return rndmNumb;
}
