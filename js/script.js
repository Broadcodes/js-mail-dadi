// Creo due array che contengono i 6 valori dei dadi
const dadoComputer = [1, 2, 3, 4, 5, 6];
const dadoUtente = dadoComputer;

// Genero dei valori che vanno da 0 a 5 per indicare gli indici dell'array
let valoreEstrattoComputer = Math.ceil((Math.random() * 10).toFixed() / 2);
let valoreEstrattoUtente = Math.ceil((Math.random() * 10).toFixed() / 2);

const valoreDadoComputer = dadoComputer[valoreEstrattoComputer];
const valoreDadoUtente = dadoUtente[valoreEstrattoUtente];

console.log(`Computer: ${valoreDadoComputer}`);
console.log(`Utente: ${valoreDadoUtente}`);

// Mostra a schermo se il vincitore è il computer, l'utente o invece è pareggio
if(valoreDadoComputer > valoreDadoUtente){
    console.log("Il vincitore è il Computer");
} else if (valoreDadoComputer < valoreDadoUtente){
    console.log("Il vincitore è l'Utente");
} else {
    console.log("Pareggio");
}

