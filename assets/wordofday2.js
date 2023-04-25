let datafile = "assets/glossary.json";

const wordContainer = document.querySelector('#wordofdaycontainer');
const term = document.querySelector('.term');
const americanVersion = document.querySelector('.american-version');
const termDefinition = document.querySelector('.term-definition');

$(function() { 

    $.getJSON(datafile, function(data) {

        function wordOfTheDay() {

            const day = new Date().getDate(); 

            console.log(day)
            console.log(data.length)

            term.innerHTML = data[day].title;
            termDefinition.innerHTML = data[day].definition;
            americanVersion.innerHTML = data[day].americanized;
        }

        setInterval(wordOfTheDay, 1000)
                
    });
    
});

