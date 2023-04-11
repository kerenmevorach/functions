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

        function translateTerm() {

            //clear any previous searches
            translatedTermList.innerHTML = ''
    
            let termToTranslate = document.querySelector('#term-to-translate').value.toLowerCase();
            console.log(termToTranslate);

            let termFound = false;

            data.forEach((item) => {
           
            for (i = 0; i < data.length; i++){
                // console.log(data[i].tags)

                if (item.tags.includes(termToTranslate)) {

                    found = true;
                // if (data[i].tags.includes(termToTranslate)) {
    
                    // Make the `li`
                    const listItem = document.createElement('li') 

                    //Create the item details
                    const itemDetails =
                        `
                            <h2>${item.title}</h2>
                            <h3>Definition:</h3>
                            <p class="definition">${item.definition}</p>
                            <h3>Americanized:</h3>
                            <p>${item.americanized}</p>
                            <div class="line"></div>
                        `;
            
                    //add the item details to the list item
                    listItem.innerHTML = itemDetails

                    //Add the list item to the ul / translated terms list
                    translatedTermList.appendChild(listItem) // Then add the whole `li` into the `ul`
                    }
                    
                }
            });

            if (!found) {
                translatedTermList.innerHTML = "Hmmmm....we couldn't find that one! Are you sure that's a Canadian term, eh?";
            }
        
            };
    
                // var termToTranslate = document.querySelector('#term-to-translate').value
    
        // on click, run the translate function
        translateButton.onclick = () =>{
            translateTerm();
            console.log('translate');
        }
    });
    
});