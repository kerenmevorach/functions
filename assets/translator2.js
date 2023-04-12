//references
//https://www.youtube.com/watch?v=kIRp6HOQzP8
//https://www.w3schools.com/js/js_json_arrays.asp
//https://www.w3schools.com/js/js_json_objects.asp
//https://stackoverflow.com/questions/45615509/search-through-json-with-keywords

let datafile = "assets/glossary.json";

const translateButton = document.querySelector('.translate-button');
const translatedTermList = document.querySelector('#translated-term-container');

$(function() { 

    //get file  
    $.getJSON(datafile, function(data) { 
        // console.log(data)

        //this function will translate whatever the user types in 
        function translateTerm() {

            //clear any previous searches
            translatedTermList.innerHTML = ''
    
            //get term value, make it lowercase
            let termToTranslate = document.querySelector('#term-to-translate').value.toString().toLowerCase();
            
            console.log(termToTranslate);

            let termFound = false;

            data.forEach((item) => {
           
            // FOR LOOP WAS WRONG!
            // for (i = 0; i < data.length; i++){
                // console.log(data[i].tags)

                if (item.tags.includes(termToTranslate)) {
                // if (item.tags == termToTranslate) {

                    termFound = true;
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
                
            });

            //if the term is not found, print this statement
            if (!termFound) {
                translatedTermList.innerHTML = "Hmmmm....we couldn't find that one! Are you sure that's a Canadian term, eh?";
            }
        
            };
    
        // on click, run the translate function
        translateButton.onclick = () =>{
            translateTerm();
            console.log('translate');
        }
    });
    
});