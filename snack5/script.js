// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

var arr=["lunedi","martedi","mercoledi","giovedi","venerdi","sabato","domenica"];
var nuovoArray=[];

function seleziona(arr,num1,num2){
    var sezioneArrey=[];
    var i=0;
    while(arr[i]>num1 && arr[i]<num2){
        sezioneArrey.push(arr[i]);
    }
    return sezioneArrey;
};

nuovoArray.push(seleziona(arr,2,5));

console.log(nuovoArray);