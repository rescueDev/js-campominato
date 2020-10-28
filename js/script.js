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

//pushing random numbers (1 to 100) through a loop 16 times
for (var i = 0; i < 16; i++) {
  bombs.push(Math.round(Math.random() * 100) + 1);
}

console.log("Numeri bomba del pc ", bombs);
console.log("Tot numeri bomba: ", bombs.length);

//asking input numbers between 1 to 100 (84 times max) Loop max 84 times
for (var i = 0; i < 5; i++) {
  var askNumber = parseInt(prompt("Inserisci numero da 1 a 100"));
  //condition if number input in range
  if (askNumber > 0 && askNumber <= 100) {
    userNumbers.push(askNumber);
  } else {
    alert("Inserisci numero che sia compreso nel range 1-100");
  }
}

console.log("Numeri utente: ", userNumbers);
console.log("Tentativi utente: ", userNumbers.length);

//function to get matches between two arrays
function getMatch(a, b) {
  var matches = [];
  for (var i = 0; i < a.length; i++) {
    for (var e = 0; e < b.length; e++) {
      if (a[i] === b[e]) matches.push(a[i]);
    }
  }
  return matches;
}
matches = getMatch(bombs, userNumbers);
console.log("Numeri uguali: ", matches);

/* getMatch(bombs, userNumbers); */

//check if number input is on array bombs and if the number is not out of range (1 to 10).
// if all said above is true then end game.

//if it is not, adding number to user score variable, then asking for another input number again and again (max 84 times)

//Output
//after end game print score (score = how many times user has choose a valid number )
