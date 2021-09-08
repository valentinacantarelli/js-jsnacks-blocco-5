// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)
var nuovaParola;

function reverse(parola){
   
    for(var i = parola.length-1; i>=0;i--){
       nuovaParola = nuovaParola+parola[i];
    }
    return nuovaParola;
}

var parolaUtente=prompt("Ciao,inserisci una parola");

console.log(reverse(parolaUtente));