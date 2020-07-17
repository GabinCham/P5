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


class Quotes {
    constructor() {
        this.themeOne = {}
    }

    initQuotes() {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/P5/data/quotes.json', true);
        let self = this;
        xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                let response = JSON.parse(this.response);
                console.log(response);
                self.themeOne = response.themeOne;

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
}


const quotes = new Quotes();
quotes.initQuotes();

function generateQuotes() {
    const themeOneQuote = document.getElementById('themeone');
    themeOneQuote.innerHTML = quotes.generateQuotesFromThemeOne();

}


document.getElementById('generateQuotes').addEventListener('click', function () {
    generateQuotes();
});
