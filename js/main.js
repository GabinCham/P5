var sujet = ['Serge', 'John', 'Kurt', 'Mick'];
var verbe = ['fait de la guitare', 'joue de la batterie', 'fait du piano', 'fait du triangle'];
var complement = ['à la plage.', 'sur scène.', 'sur la tour Eiffel.', 'nul part.'];
var aleatoire = null;

const sujetId = document.getElementById('sujet');
const verbeId = document.getElementById('verbe');
const complementId = document.getElementById('complement');
const pullNumber = document.getElementById('choice-number');
var responseNumberVar = document.getElementById('responseNumber');



const sujetFromJson = document.getElementById('sujetJson');
console.log('chocie number', document.getElementById('choice-number').valueOf());
//sujetId.innerHTML = sujet[3];
//verbeId.innerHTML = verbe[3];
//complementId.innerHTML = complement[3];

function getNumber() {
    var getNumber = document.getElementById("choice-number").value;
    alert(getNumber);
    if (getNumber === '2') {
        alert('Vous avez choisi judiceusement');
        return this.generate();
    }
    else {
        alert('Wrong number');
    }
}

function generate() {
    // complementId.innerHTML = complement[2];
    aleatoire = Math.floor(Math.random() * sujet.length);
    sujetId.innerHTML = sujet[aleatoire];
    aleatoire = Math.floor(Math.random() * verbe.length);
    verbeId.innerHTML = verbe[aleatoire];
    aleatoire = Math.floor(Math.random() * complement.length);
    complementId.innerHTML = complement[aleatoire];
}


class Quotes {
    constructor() {
        this.themeOne = {}
    }

    initQuotes() {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/P5/data/quotes.json', true);
        xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(this.response);
                this.themeOne = this.response.themeOne;
// Requête finie, traitement ici.
            }
        }
        xhr.send(null);
    }
}

const quotes = new Quotes();
quotes.initQuotes();

function generateFromJson() {
    sujetFromJson.innerHTML = quotes.themeOne.start;
    console.log('fonction iniQuotes == ', this.initQuotes().themeOne.start);
    // non pour : console.log('this.quotes == ', this.quotes);
    // non pour : console.log('this.themeOne == ', this.themeOne);
    // cannot read : console.log('this.response.themeOne == ', this.response.themeOne);
    console.log('quotes == ', quotes); //trouve l'object mais celui tu ts surement
   // non : console.log('this.quotes == ', this.quotes);
   // non  : console.log('quotes.initQuotes() == ', quotes.initQuotes());
    console.log('this.quotes.initQuotes() == ', this.quotes.initQuotes());

    //aleatoire = Math.floor(Math.random() * sujet.length);
    //sujetId.innerHTML = sujet[aleatoire];
    //aleatoire = Math.floor(Math.random() * verbe.length);
    //verbeId.innerHTML = verbe[aleatoire];
    //aleatoire = Math.floor(Math.random() * complement.length);
    //complementId.innerHTML = complement[aleatoire];
}


// quotes.themeOne.start
// voir onready & xml
// bien comprendre code
