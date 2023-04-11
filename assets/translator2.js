//reference
//https://www.youtube.com/watch?v=kIRp6HOQzP8

//define an array to hold the slideshow data 
// let slideshow = [];

let datafile = "assets/glossary.json";

const translateButton = document.querySelector('.translate-button');
const translatedTermList = document.querySelector('#translated-term-container');
//for some reason this needs to be repeated here and within the function for the list item to appear in the dom
// let termToTranslate = document.querySelector('#term-to-translate').value;

//ready function
$(function() { 

    //get file  
    $.getJSON(datafile, function(data) { 
        console.log('inside the function')
        // console.log(data)

        //print out every title
        // for (i = 0; i < data.length; i = i + 1){
        //     console.log(data[i].tags)
        // }

        function translateTerm() {
        
            //clear any previous searches
            translatedTermList.innerHTML = ''
    
            var termToTranslate = document.querySelector('#term-to-translate').value
            console.log(termToTranslate.toLowerCase())
           
            for (i = 0; i < data.length; i++){
                // console.log(data[i].tags)

                if (data[i].tags.includes(termToTranslate.toLowerCase())) {
                // if (data[i].tags == termToTranslate) {
    
                    // Make the `li`
                    const listItem = document.createElement('li') 

                    //Create the item details
                    const itemDetails =
                        `
                            <h2>${data[i].title}</h2>
                            <h3>Definition:</h3>
                            <p class="definition">${data[i].definition}</p>
                            <h3>Americanized:</h3>
                            <p>${data[i].americanized}</p>
                            <div class="line"></div>
                        `
            
                    listItem.innerHTML = itemDetails

                    //Add the list item to the ul or translated terms list
                    translatedTermList.appendChild(listItem) // Then add the whole `li` into the `ul`
                    }
                    else {
                        translatedTermList.innerHTML = ''
                        //have a few random statements to choose from, but for now just use this.
                        translatedTermList.innerHTML = "Hmmmm....we couldn't find that one! Are you sure that's a Canadian term, eh?"
                    }
            }
    
                // var termToTranslate = document.querySelector('#term-to-translate').value
    
        }
    
        // on click, run the translate function
        translateButton.onclick = () =>{
            translateTerm();
            console.log('translate');
        }

    });

});