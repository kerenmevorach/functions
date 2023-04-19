let datafile = "assets/glossary.json";

const wordContainer = document.querySelector('#wordofdaycontainer');
const term = document.querySelector('.term');
const americanVersion = document.querySelector('.american-version');
const termDefinition = document.querySelector('.term-definition');
let itemDetails;


$(function() { 

    $.getJSON(datafile, function(data) {
    
        setWordofDay(data);

        function getTime() {
            let now = new Date();
            let h = new Date().getHours()
            let m = new Date().getMinutes()
            let s = new Date().getSeconds()
            
            let time = h + ":" + m;
            console.log(time)

            if (h === 0 && m === 0 && s === 0 ){
                console.log('it is time!')
                setWordofDay(data);
            }

        };

        setInterval(getTime, 60000)
                
    });
    
});

function setWordofDay(data) {

    let randomNumber = Math.floor(Math.random() * data.length);

    term.innerHTML = data[randomNumber].title;
    termDefinition.innerHTML = data[randomNumber].definition;
    americanVersion.innerHTML = data[randomNumber].americanized;
}