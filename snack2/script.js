// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine=[
    {
        "varieta":"zucchina nera",
        "pesoGr":150,
        "lunghezzaCm":12
    },
    {
        "varieta":"zucchino romanesco",
        "pesoGr":180,
        "lunghezzaCm":10
    },
    {
        "varieta":"zucchino fiorentino",
        "pesoGr":80,
        "lunghezzaCm":10
    },
    {
        "varieta":"zucchina napoletana",
        "pesoGr":200,
        "lunghezzaCm":17
    },
    {
        "varieta":"zucchine tonde",
        "pesoGr":190,
        "lunghezzaCm":11
    },
    {
        "varieta":"zucchine trombetta",
        "pesoGr":180,
        "lunghezzaCm":19
    },
    {
        "varieta":"zucchina striata",
        "pesoGr":220,
        "lunghezzaCm":20
    },
    {
        "varieta":"zucchina bianca",
        "pesoGr":170,
        "lunghezzaCm":19
    },
    {
        "varieta":"zucchina gialla",
        "pesoGr":210,
        "lunghezzaCm":15
    },
    {
        "varieta":"zucchina pugliese",
        "pesoGr":250,
        "lunghezzaCm":17
    },
];

var zucchineLunghe=[];
var zucchineCorte=[];

for(var i=0;i<zucchine.length;i++){
    if(zucchine[i].lunghezzaCm>15){
        zucchineLunghe.push(zucchine[i]);
    }else{
        zucchineCorte.push(zucchine[i]);
    }
}
console.log(zucchineLunghe);
console.log(zucchineCorte);

var pesoZucchineLunghe=0;
var pesoZucchineCorte=0;

for(var i=0;i<zucchineLunghe.length;i++){
    pesoZucchineLunghe+=zucchineLunghe[i].pesoGr;
}
for(var i=0;i<zucchineCorte.length;i++){
    pesoZucchineCorte+=zucchineCorte[i].pesoGr;
}
console.log(`il peso totale è${pesoZucchineLunghe}`);
console.log(`il peso totale è${pesoZucchineCorte}`);