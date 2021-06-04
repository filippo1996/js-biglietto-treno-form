/**
 * Input (dati in entrata)
 * Recuperiamo i valori dai campi input 
 * Solo quando si da l'invio al click del pulsante
 */

//Element DOM
var eleFullName = document.getElementById('full-name');
var eleKm = document.getElementById('km');
var eleAge = document.getElementById('age');
var eleSubmit = document.getElementById('submit');
var eleCancel = document.getElementById('cancel');

eleSubmit.addEventListener('click', function(){
    var fullName = eleFullName.value;
    var km = parseInt(eleKm.value);
    var age = eleAge.value;
    console.log(fullName,km,age);

    //Controllo tipo dei km
    if(!isNaN(km)){
        //Codice treno (numero casuale tra 90000 e 100000 escluso)
        var codeCp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
        //console.log(codeCp);

        //Numero carrozza (numero casuale tra 1 e 9 incluso)
        var carriage = Math.round(Math.random() * (9 - 1)) + 1;
        //console.log(carriage);

        //Generazione del prezzo + lo sconto se è presente
        var price = 0.25; //Costo al km 0.25 euro
        var message = 'Nessuno sconto applicato';
        var discount = 0;

        //Controllo disponibilità dello sconto in base l'età
        if(age === 'minorenne'){
            message = 'sconto minorenne';
            discount = 20;
        }else if(age === 'over65'){
            message = 'sconto over 65';
            discount = 40;
        }

        //Calcolo prezzo totale
        var subPrice = price * km;
        var totalPrice = discount ? subPrice * discount / 100 : subPrice;

        //console.log(totalPrice);

    }else{
        alert('Attenzione! formato km non valido, assicurati di inserire solo numeri');
    }
});
