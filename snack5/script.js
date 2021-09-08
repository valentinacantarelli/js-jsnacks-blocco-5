// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

var arr=["lunedi","martedi","mercoledi","giovedi","venerdi","sabato","domenica"];
var min=parseInt(prompt("inserisci un numero tra 1 e 3"));
var max=parseInt(prompt("Inserisci un numero tra 4 e 7"));
var nuovoArray=[];

function seleziona(arr,num1,num2){
    var sezioneArrey=[];
    
    for(var i=0;i<arr.length;i++){
        if(i>=num1 && i<=num2){
            sezioneArrey.push(arr[i]);
        }
    }
    return sezioneArrey;
};

nuovoArray.push(seleziona(arr,min,max));

console.log(nuovoArray);