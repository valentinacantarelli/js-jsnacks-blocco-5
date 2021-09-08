// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


function reverse(parola){
    var nuovaParola="";
    for(var i = parola.length-1; i>=0;i--){
       nuovaParola +=parola[i];
    }
    return nuovaParola;
}

var parolaUtente=reverse(prompt("Ciao,inserisci una parola"));

console.log(parolaUtente);