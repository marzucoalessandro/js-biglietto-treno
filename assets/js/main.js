//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65


//dichiaro le mie variabili
var km, age;

//chiedi il numero di chilometri da percorerre
var km = Number(prompt("quanti chilometri devi percorrere?"));
  //console.log(km);

//chiedi età del passeggero
var age = Number(prompt("quanti anni hai?"));
  //console.log(age);

//prezzo del biglietto....0.21 € /km
var priceticket = Number(km * 0.21);

var sconto1 = (priceticket / 100) * 20;
var sconto2 = (priceticket / 100) * 40;

//condizioni if else.....
if (age < 18) {
  alert("Gentile ragazzo il prezzo del tuo biglietto è di") + (priceticket) - (sconto1);
} else if (age > 64) {
  alert("Caro Nonnetto il prezzo del tuo biglietto è di") + (priceticket) - (sconto2);
} else {
  alert("EEEhh per te niente sconti ...prezzo pieno ....prepara " + priceticket + "€");
}



//  priceticket = (priceticket - ((priceticket / 100) * 20));
//priceticket = (priceticket - ((priceticket / 100) * 20));
