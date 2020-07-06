var sujet = ['Serge', 'John', 'Kurt', 'Mick'];
var verbe = ['fait de la guitar', 'joue de la batterie', 'fait du piano', 'fait du triangle'];
var complement = ['à la plage.','sur scène.', 'sur la tour Eiffel.', 'nul part.'];

alert('VERBE N3 == ', verbe[3]);

const container = document.getElementById('container');

container.innerHTML = verbe[3];

class Quotes {
    constructor() {
        this.themeOne = {}
    }

    initQuotes() {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/P5/data/quotes.json', true);
        xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(this.responseText);
// Requête finie, traitement ici.
            }

        }
    }
}

const quotes = new Quotes();
quotes.initQuotes();
