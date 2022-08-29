// VERSIONE ARRAY
// // Creo due array che contengono i 6 valori dei dadi
// const dadoComputer = [1, 2, 3, 4, 5, 6];
// const dadoUtente = dadoComputer;

// Modifico il colore del pulsante se il mouse va sopra l'elemento
const pulsanteGioca = document.getElementById("lanciaDado");
pulsanteGioca.addEventListener("mouseenter", function(){
    pulsanteGioca.style.backgroundColor = "rgb(255, 123, 66)";
});

pulsanteGioca.addEventListener("mouseleave", function(){
    pulsanteGioca.style.backgroundColor = "red";
});

// Se viene cliccato il pulsante genere l'evento ovvero mostra il risultato del gioco
pulsanteGioca.addEventListener("click", function(){

// Disabilito il pulsante quando viene cliccato
pulsanteGioca.disabled = true;

// VERSIONE ARRAY
// // Genero dei valori che vanno da 0 a 5 per indicare gli indici dell'array
// let valoreEstrattoComputer = Math.ceil((Math.random() * 10).toFixed() / 2);
// let valoreEstrattoUtente = Math.ceil((Math.random() * 10).toFixed() / 2);

let valoreEstrattoComputer = Math.floor((Math.random() * 6) + 1);
let valoreEstrattoUtente = Math.floor((Math.random() * 6) + 1);

// VERSIONE ARRAY
// const valoreDadoComputer = dadoComputer[valoreEstrattoComputer];
// const valoreDadoUtente = dadoUtente[valoreEstrattoUtente];

// console.log(`Computer: ${valoreDadoComputer}`);
// console.log(`Utente: ${valoreDadoUtente}`);

console.log(`Computer: ${valoreEstrattoComputer}`);
console.log(`Utente: ${valoreEstrattoUtente}`);

// Mostra a schermo se il vincitore è il computer, l'utente o invece è pareggio
// Recupero dell'elemento div in cui verrà mostrato il risultato del gioco
const mostraRisultato = document.querySelector(".risultato");
const risultato = document.createElement("h2");
const risultato2 = document.createElement("h2");
risultato2.style.color = "#fff";

// Creo un pulsante di reset per giocare di nuovo
const reset = document.createElement("input");
reset.type = "button";
reset.value = "Gioca di nuovo";

reset.addEventListener("click", function(){
    window.location.reload();
});

// VERSIONE ARRAY
// if(valoreDadoComputer > valoreDadoUtente){
//     risultato.innerHTML = `Computer: ${valoreDadoComputer} - Tu: ${valoreDadoUtente}`;
//     risultato2.innerHTML = `Il vincitore è il Computer &#128520;`;
//     console.log("Il vincitore è il Computer");
// } else if (valoreDadoComputer < valoreDadoUtente){
//     risultato.innerHTML = `Computer: ${valoreDadoComputer} - Tu: ${valoreDadoUtente}`;
//     risultato2.innerHTML = "Il vincitore sei TU! &#128540";
//     console.log("Il vincitore è l'Utente");
// } else {
//     risultato.innerHTML = `Computer: ${valoreDadoComputer} - Tu: ${valoreDadoUtente}`;
//     risultato2.innerHTML = "Pareggio &#128530;";
//     console.log("Pareggio");
// }


if(valoreEstrattoComputer > valoreEstrattoUtente){
    risultato.innerHTML = `Computer: ${valoreEstrattoComputer} - Tu: ${valoreEstrattoUtente}`;
    risultato2.innerHTML = `Il vincitore è il Computer &#128520;`;
    console.log("Il vincitore è il Computer");
} else if (valoreEstrattoComputer < valoreEstrattoUtente){
    risultato.innerHTML = `Computer: ${valoreEstrattoComputer} - Tu: ${valoreEstrattoUtente}`;
    risultato2.innerHTML = "Il vincitore sei TU! &#128540";
    console.log("Il vincitore è l'Utente");
} else {
    risultato.innerHTML = `Computer: ${valoreEstrattoComputer} - Tu: ${valoreEstrattoUtente}`;
    risultato2.innerHTML = "Pareggio &#128530;";
    console.log("Pareggio");
}

mostraRisultato.append(risultato);
mostraRisultato.append(risultato2);
mostraRisultato.append(reset);

});





