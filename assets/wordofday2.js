//source: https://www.banjocode.com/post/javascript/iterate-array-with-modulo
//using modulo to ensure we are getting data within the array

let datafile = "assets/glossary.json";

const wordContainer = document.querySelector('#wordofdaycontainer');
const term = document.querySelector('.term');
const americanVersion = document.querySelector('.american-version');
const termDefinition = document.querySelector('.term-definition');

$(function() { 

    $.getJSON(datafile, function(data) {

        function wordOfTheDay() {

            //example from source
            let arrayLength = data.length;
            let currentIndex = 24;
            let nextIndex = (currentIndex + 1) % arrayLength;

            // console.log(today)
            // console.log(data.length);
            // console.log(nextIndex);


            
            // let today = new Date().getDate() - 1;
            // let wordIndex = today % data.length;

            let minute = new Date().getMinutes() - 1;
            let wordIndex = minute % data.length;

            term.innerHTML = data[wordIndex].title;
            termDefinition.innerHTML = data[wordIndex].definition;
            americanVersion.innerHTML = data[wordIndex].americanized;
        }

            // console.log(data[2].title)

            //  let day = new Date().getDate() - 1; 

            // for (let day = new Date().getDate() - 1; day < data.length; day++) {

            //     if (day < data.length){
            //         term.innerHTML = data[day].title;
            //         termDefinition.innerHTML = data[day].definition;
            //         americanVersion.innerHTML = data[day].americanized;
            //     }

            //     else if (day > data.length){
            //         day = 0; continue;
            //         term.innerHTML = data[day].title;
            //         termDefinition.innerHTML = data[day].definition;
            //         americanVersion.innerHTML = data[day].americanized;
            //     }

            // }
                
        // }
        setInterval(wordOfTheDay, 1000);
        wordOfTheDay();
    
    });

});


            // console.log(data[2].title)

            // let day = new Date().getDate() - 1; 

            // if (day < data.length){
            //     term.innerHTML = data[day].title;
            //     termDefinition.innerHTML = data[day].definition;
            //     americanVersion.innerHTML = data[day].americanized;
            // }

            // else if (day > data.length){
            //     counter = 0
            //     counter++
            //     day = 0 + counter
            //     term.innerHTML = data[day].title;
            //     termDefinition.innerHTML = data[day].definition;
            //     americanVersion.innerHTML = data[day].americanized;
            // }   