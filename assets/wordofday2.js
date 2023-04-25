let datafile = "assets/glossary.json";

const wordContainer = document.querySelector('#wordofdaycontainer');
const term = document.querySelector('.term');
const americanVersion = document.querySelector('.american-version');
const termDefinition = document.querySelector('.term-definition');

$(function() { 

    $.getJSON(datafile, function(data) {

        function wordOfTheDay() {

            let day = new Date().getDate() - 1; 

            if (day < data.length){
                term.innerHTML = data[day].title;
                termDefinition.innerHTML = data[day].definition;
                americanVersion.innerHTML = data[day].americanized;
            }

            else if (day > data.length){
                day = 0
                term.innerHTML = data[day].title;
                termDefinition.innerHTML = data[day].definition;
                americanVersion.innerHTML = data[day].americanized;
            }

            console.log(day)
            console.log(data.length)

        }

        setInterval(wordOfTheDay, 1000)
                
    });
    
});

