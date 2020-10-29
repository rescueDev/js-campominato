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
var userPromptNumbers = [];
var numberBombMatch = false;
var numberInvalid = false;
var doubleNumber = false;

//pushing random numbers (1 to 100) through a loop 16 times
for (var i = 0; i < 16; i++) {
  bombs.push(Math.round(Math.random() * 100) + 1);
}

console.log("Numeri bomba del pc ", bombs);
console.log("Tot numeri bomba: ", bombs.length);

//asking input numbers between 1 to 100 (84 times max) Loop max 84 times

for (var i = 0; i < 84; i++) {
  var askNumber = parseInt(prompt("Inserisci numero da 1 a 100"));
  console.log(askNumber);
  //check if the number is not out of range (1 to 100) and is a number.
  if (askNumber < 1 || askNumber > 100 || isNaN(askNumber)) {
    console.log(askNumber, " non è un numero valido");
    alert("Non è un numero valido, Fine partita!!!");
    numberInvalid = true; //variabile che decreta fine gioco come se beccasse un numero bomba
  } else {
    userPromptNumbers.push(askNumber); //array to check if input number is unique (no double items)
    userNumbers.pop();
  }
  //loop that scan over array in order to find double items in same array
  for (var x = 0; x < userNumbers.length; x++) {
    if (askNumber === userPromptNumbers[x]) {
      console.log("Hai messo un numero già scelto precedentemente");
      userNumbers.pop();
    }
  }

  console.log("Numeri che vanno nell'array dei doppi: ", userPromptNumbers);

  //loop to determine if user number is ==== to one of array.bombs numbers(bomb)
  for (var j = 0; j < bombs.length; j++) {
    if (askNumber === bombs[j]) {
      numberBombMatch = true;
    }
  }
  //checking if user choose a bomb number
  if (numberBombMatch === true) {
    console.log("Hai preso la bomba!! BOOOM"); //Game Over
    console.log("Punteggio utente: ", userNumbers.length);
    break;
  } else if (numberInvalid === true) {
    console.log("Hai usato un numero invalido, hai perso!!");
    break;
    //else adding number to user score variable
  } else {
    userNumbers.push(askNumber);
  }
}

console.log("Numeri utente: ", userNumbers);
console.log("Numeri Possibili doppi ", userPromptNumbers);
console.log("Punteggio utente: ", userNumbers.length);

//check if number input is on array bombs and if the number is not out of range (1 to 10).
// if all said above is true then end game.

//if it is not, adding number to user score variable, then asking for another input number again and again (max 84 times)

//Output
//after end game print score (score = how many times user has choose a valid number )
