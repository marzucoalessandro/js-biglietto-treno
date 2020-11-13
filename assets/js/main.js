//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65


//dichiaro le mie variabili
var km, age;
//chiedi il numero di chilometri da percorerre
var km = number(prompt("quanti chilometri devi percorrere?"));
//chiedi età del passeggero
var age = prompt("quanti anni hai?");

//prezzo del biglietto....0.21 € /km
var priceticket = (km * 0.21);

//condizioni if else.....
if (age < 18) {
    alert()
}
