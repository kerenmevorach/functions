let datafile = "assets/glossary.json";

const wordContainer = document.querySelector('#wordofdaycontainer');
const term = document.querySelector('.term');
const americanVersion = document.querySelector('.american-version');
const termDefinition = document.querySelector('.term-definition');
let itemDetails;


$(function() { 

    //get file  
    $.getJSON(datafile, function(data) {
    
        term.innerHTML = data[0].title
        termDefinition.innerHTML = data[0].definition
        americanVersion.innerHTML = data[0].americanized


        function getTime() {
            let h = new Date().getHours()
            let m = new Date().getMinutes()
            let s = new Date().getSeconds()
            
            let time = h + ":" + m;
            console.log(time)

        if (h == 0 && m == 0 && s == 0) {
            console.log('its time!')

            let randomNumber = Math.floor(Math.random() * 21)

            term.innerHTML = data[randomNumber].title
            termDefinition.innerHTML = data[randomNumber].definition
            americanVersion.innerHTML = data[randomNumber].americanized

        }
        
    };

    setInterval(getTime, 1000)
                
    });
    
});
