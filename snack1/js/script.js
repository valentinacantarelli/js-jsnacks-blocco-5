// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

var totalePeso=0;

for(var i=0;i<zucchine.length;i++){
    totalePeso+=zucchine[i].pesoGr;
}
console.log(`il peso totale è${totalePeso}`)