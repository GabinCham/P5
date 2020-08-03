class Quotes {
    constructor() {
        this.themeOne = {}
    }


    initQuotes() {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', '/P5/data/quotes.json', true);
        let self = this;
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                let response = JSON.parse(this.response);
                console.log(response);
                self.themeOne = response.themeOne;
            }
        }
        xhr.send(null);
    }


    /**
     * Genere et retourne une citation aléatoire du theme numero un.
     * @return {string} Citation theme un
     */
    generateQuotesFromThemeOne() {
        let start = this.themeOne.start[Math.floor(Math.random() * this.themeOne.start.length)];
        let middle = this.themeOne.middle[Math.floor(Math.random() * this.themeOne.middle.length)];
        let end = this.themeOne.end[Math.floor(Math.random() * this.themeOne.end.length)];
        return `${start} ${middle} ${end} <br>`;
    }
}

/**
 * Vide le contenue de la div
 */
function resetContainer() {
    document.getElementById("themeone").innerHTML = "";
}

/**
 * Permet generer citation et insérer dans le container
 */
function generateQuotes() {
    const themeOneQuote = document.getElementById('themeone');
    themeOneQuote.innerHTML += quotes.generateQuotesFromThemeOne();
}

/**
 * Retourne nombre de citation choisi
 */
function getNumber() {
    var getNumber = document.getElementById("choice-number").value;
    // alert(getNumber);
    let realValue = parseInt(getNumber);
    if (realValue >= 1 && realValue <= 5 ) {
        return realValue;
    } else {
        alert('faux');
        return undefined;
    }
}

document.getElementById('generateQuotes').addEventListener('click', function () {
    let numberOfCitation = getNumber()
    if (numberOfCitation) {
        for (let i = 0; i < numberOfCitation; i++ ) {
            generateQuotes();
        }
        // resetContainer();
    }

});

const quotes = new Quotes();
quotes.initQuotes();
