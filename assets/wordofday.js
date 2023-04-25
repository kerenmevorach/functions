//source: https://www.banjocode.com/post/javascript/iterate-array-with-modulo
//source: https://www.youtube.com/watch?v=r5Iy3v1co0A
//source: https://www.kirupa.com/javascript/infinitely_cycle_through_array.htm

let datafile = "assets/glossary.json";

const wordContainer = document.querySelector('#wordofdaycontainer');
const term = document.querySelector('.term');
const americanVersion = document.querySelector('.american-version');
const termDefinition = document.querySelector('.term-definition');

$(function() { 

    $.getJSON(datafile, function(data) {

        function wordOfTheDay() {

            //example from source
            // let arrayLength = data.length;
            // let currentIndex = 24;
            // let nextIndex = (currentIndex + 1) % arrayLength;

            // console.log(today)
            // console.log(data.length);
            // console.log(nextIndex);

            // let minute = new Date().getSeconds() - 1;
            // let wordIndex = Math.abs(minute % data.length);
     
            
            //getting the day and subtracting one, since the array starts from 0
            let today = new Date().getDate() - 1;
            //using modulo operator - ensures we are staying within the array
            //once the wordIndex is larger than the length of the data, the wordIndex will go back to 0
            let wordIndex = today % data.length;
            console.log(wordIndex)


            term.innerHTML = data[wordIndex].title;
            termDefinition.innerHTML = data[wordIndex].definition;
            americanVersion.innerHTML = data[wordIndex].americanized;
        }

        setInterval(wordOfTheDay, 1000);
    
    });

});