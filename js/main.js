var sujet = ['Serge', 'John', 'Kurt', 'Mick'];
var verbe = ['fait de la guitare', 'joue de la batterie', 'fait du piano', 'fait du triangle'];
var complement = ['à la plage.', 'sur scène.', 'sur la tour Eiffel.', 'nul part.'];


const sujetId = document.getElementById('sujet');
const sujetJson = document.getElementById('sujetJson');
const verbeId = document.getElementById('verbe');
const complementId = document.getElementById('complement');


sujetId.innerHTML = sujet[3];
verbeId.innerHTML = verbe[3];
complementId.innerHTML = complement[3];


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


sujetJson.innerHTML = quotes.themeOne.start;



// quotes.themeOne.start
// voir onready & xml
// bien comprendre code
