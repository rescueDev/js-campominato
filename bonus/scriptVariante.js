//empty array to fill on
var bombs = [];
var userNumbers = [];
var userPromptNumbers = [];
var numberBombMatch = false;
var numberInvalid = false;
var doubleNumber = false;

function campoMinato(min, max) {
  //pushing random numbers (1 to 100) through a loop 16 times
  for (var i = 0; i < 16; i++) {
    bombs.push(Math.round(Math.random() * (max - min + 1) + min));
  }

  console.log("Numeri bomba del pc ", bombs);
  console.log("Tot numeri bomba: ", bombs.length);

  //asking input numbers between 1 to 100 (84 times max) Loop max 84 times

  for (var i = 0; i < max - 16; i++) {
    var askNumber = parseInt(prompt("Inserisci numero da 1 a 100"));
    console.log(askNumber);
    //check if the number is not out of range (1 to 100) and is a number.
    if (askNumber < min || askNumber > max || isNaN(askNumber)) {
      console.log(askNumber, " non è un numero valido");
      alert("Non è un numero valido, Fine partita!!!");
      numberInvalid = true; //variabile che decreta fine gioco come se beccasse un numero bomba
    } else {
      userPromptNumbers.push(askNumber); //array to check if input number is unique (no double items)
    }
    //loop that scan over array in order to find double items in same array
    for (var x = 0; x < userNumbers.length; x++) {
      if (askNumber === userPromptNumbers[x]) {
        console.log("Hai messo un numero già scelto precedentemente");
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
}

//function campoMinato

// Select Difficulty (comment/uncomment)
campoMinato(1, 100);
// campoMinato(1, 80);
// campoMinato(1, 50);
