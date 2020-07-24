// Array ThemeOne à reporter dans le Json
var sujet = ['Serge', 'John', 'Kurt', 'Mick'];
var verbe = ['fait de la guitare', 'joue de la batterie', 'fait du piano', 'fait du triangle'];
var compl = ['à la plage.', 'sur scène.', 'sur la tour Eiffel.', 'nul part.'];

// Array ThemeTwo à reporter dans le Json
var sujetThemeTwo = ['BLFEF', 'FEFEF', 'EFE', 'DGT'];
var verbeThemeTwo = ['1111', '22222', '33333', '44444'];
var complThemeTwo = ['1111', '22222', '33333', '444444'];

var aleatoire = null;

// Remplissage dans HTML pour ThemeOne
const sujetId = document.getElementById('sujet');
const verbeId = document.getElementById('verbe');
const complId = document.getElementById('compl');

// Remplissage dans HTML pour ThemeTwo
const sujetIdTwo = document.getElementById('sujetTwo');
const verbeIdTwo = document.getElementById('verbeTwo');
const complIdTwo = document.getElementById('complTwo');

// Remplissage dans HTML pour test avec JSON
const sujetFromJson = document.getElementById('sujetJson');

// Récupération du choix du theme + Execution
function getTheme() {
    var pullGetTheme = document.getElementById("pull-get-theme").value;
    if (pullGetTheme === '1') {
        return generateThemeOne()
    } else if (pullGetTheme === '2') {
        return generateThemeTwo();
    } else {
        alert('Choisi un chiffre entre 1 et 2 stp');
    }
}

/**
 * Retourne nombre de citation choisi
 * @return {string}
 */
function getNumber() {
    var getNumber = document.getElementById("choice-number").value;
    // alert(getNumber);
    if (getNumber === '1') {
        return generateQuotes()*2;
    } else if (getNumber === '2') {
        alert('Vous avez choisi judiceusement');
        return this.generateThemeOne();
    } else {
        return alert('Wrong number');
    }
}

/**
 * Genere une phrase du ThemeOne au click
 *(À faire: Regrouper en une fonction avec conditions après JSON)
 */
function generateThemeOne() {
    aleatoire = Math.floor(Math.random() * sujet.length);
    sujetId.innerHTML = sujet[aleatoire];
    aleatoire = Math.floor(Math.random() * verbe.length);
    verbeId.innerHTML = verbe[aleatoire];
    aleatoire = Math.floor(Math.random() * compl.length);
    complId.innerHTML = compl[aleatoire];
}
// Genere une phrase du ThemeTwo au click
// (À faire: Regrouper en une fonction avec conditions après JSON)
function generateThemeTwo() {
    aleatoire = Math.floor(Math.random() * sujetThemeTwo.length);
    sujetIdTwo.innerHTML = sujetThemeTwo[aleatoire];
    aleatoire = Math.floor(Math.random() * verbeThemeTwo.length);
    verbeIdTwo.innerHTML = verbeThemeTwo[aleatoire];
    aleatoire = Math.floor(Math.random() * complThemeTwo.length);
    complIdTwo.innerHTML = complThemeTwo[aleatoire];
}

// Récupération du fichier JSON
class Quotes {
    constructor() {
        this.themeOne = {}
        this.themeTwo = {}

    }

    initQuotes() {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/P5/data/quotes.json', true);
        let self = this;
        xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                let response  = JSON.parse(this.response);
                console.log(response);
                self.themeOne = response.themeOne;
                self.themeOne = response.themeTwo;

// Requête finie, traitement ici.
            }
        }
        xhr.send(null);
    }

    generateQuotesFromThemeOne() {
        let start = this.themeOne.start[Math.floor(Math.random() * this.themeOne.start.length)];
        let middle = this.themeOne.middle[Math.floor(Math.random() * this.themeOne.middle.length)];
        let end = this.themeOne.end[Math.floor(Math.random() * this.themeOne.end.length)];
        return `${start} ${middle} ${end}`;
    }
    generateQuotesFromThemeTwo() {
        let start = this.themeTwo.start[Math.floor(Math.random() * this.themeTwo.start.length)];
        let middle = this.themeTwo.middle[Math.floor(Math.random() * this.themeTwo.middle.length)];
        let end = this.themeTwo.end[Math.floor(Math.random() * this.themeTwo.end.length)];
        return `${start} ${middle} ${end}`;
    }
}

const quotes = new Quotes();
quotes.initQuotes();

// Generation d'une Theme au click
// (À faire: TOUT)
// Remplacera la fonction generateThemeOne & Two


function generateQuotes() {
// console.log(quotes.generateQuotesFromThemeOne());
const themeOneQuote = document.getElementById('themeone');
themeOneQuote.innerHTML = quotes.generateQuotesFromThemeOne();
const themeTwoQuote = document.getElementById('themetwo');
themeOneQuote.innerHTML = quotes.generateQuotesFromThemeTwo();
//console.log(quotes.generateQuotesFromThemeTwo());
}


document.getElementById('generateQuotes').addEventListener('click', function () {
generateQuotes();
});

//document.getElementById('generateQuotesTwo').addEventListener('click', function () {
 //   generateQuotes(quotes);
//})

// NOTES ://

// quotes.themeOne.start
// voir onready & xml
// bien comprendre code



//VENDREDI 17
// d'abord vider container pour le re remplir
//theme 2, de une a cinq citations generer
//controler le theme le choix du theme
//theme 2 json
//selectionner theme

