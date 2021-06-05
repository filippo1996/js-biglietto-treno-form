/**
 * Input (dati in entrata)
 * Recuperiamo i valori dai campi input 
 * Solo quando si da l'invio al click del pulsante
 */

//Element DOM Input
var eleFullName = document.getElementById('full-name');
var eleKm = document.getElementById('km');
var eleAge = document.getElementById('age');
var eleSubmit = document.getElementById('submit');
var eleCancel = document.getElementById('cancel');

//Element DOM Output
var eleOutput = document.getElementById('output');
var eleOutputFullName = document.getElementById('output-full-name');
var eleDiscount = document.getElementById('discount');
var eleCarriage = document.getElementById('carriage');
var eleCodeCp = document.getElementById('code-cp');
var elePrice = document.getElementById('price');

//Evento al click del pulsante submit (Genera)
eleSubmit.addEventListener('click', function(){
    var fullName = eleFullName.value;
    var km = Math.abs(parseInt(eleKm.value));
    var age = eleAge.value;

    //Controllo del tipo nei km
    if((!isNaN(km) && km) && fullName && age){
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
            message = 'Sconto minorenne';
            discount = 20;
        }else if(age === 'over65'){
            message = 'Sconto over 65';
            discount = 40;
        }

        //Calcolo prezzo totale
        var subPrice = price * km;
        discount *= subPrice / 100;
        var totalPrice = subPrice - discount;

        /**
         * Output (dati in uscita)
         * Stampiamo i valori dai campi input 
         * Solo quando si da l'invio al click del pulsante
         */

         eleOutput.className = '';
         eleOutputFullName.innerHTML = `Nome passeggiero ${fullName}`;
         eleDiscount.innerHTML = message;
         eleCarriage.innerHTML = carriage;
         eleCodeCp.innerHTML = codeCp;
         elePrice.innerHTML = `${totalPrice} \u20AC`;

    }else{
        alert('Attenzione! campi non compilati correttamente, riprova');
    }
});


//Evento al click del pulsante cancel (Annulla)
eleCancel.addEventListener('click', function(){
    //Svuotiamo gli elementi della sezione output
    eleOutput.className = 'hidden';
    eleOutputFullName.innerHTML = '';
    eleDiscount.innerHTML = '';
    eleCarriage.innerHTML = '';
    eleCodeCp.innerHTML = '';
    elePrice.innerHTML = '';

    //Svuotiamo gli elementi della sezione input
    eleFullName.value = '';
    eleKm.value = '';
    eleAge.value = '';
});
