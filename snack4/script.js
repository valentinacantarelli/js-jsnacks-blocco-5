// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var arr1=["a","b","c"];
var arr2=[1,2,3];

function creaArrey(arr1, arr2){
    let nuovoArrey=[];
    for(var i=0;i<arr1.length;i++){
        nuovoArrey.push(arr1[i]);
        nuovoArrey.push(arr2[i]);
    }
    return nuovoArrey;
};






console.log(creaArrey(arr1,arr2));