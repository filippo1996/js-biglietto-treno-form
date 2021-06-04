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
    var km = eleKm.value;
    var age = eleAge.value;
    //console.log(fullName,km,age);

    //Codice treno (numero casuale tra 90000 e 100000 escluso)
    var codeCp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    //console.log(codeCp);
});
