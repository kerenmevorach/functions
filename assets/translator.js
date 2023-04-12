// Function to render your items
const renderItems = (glossary) => {
	// The `ul` where the items will be inserted

    const translateButton = document.querySelector('.translate-button');
    const translatedTermList = document.querySelector('#translated-term-container');
    //for some reason this needs to be repeated here and within the function for the list item to appear in the dom
    let termToTranslate = document.querySelector('#term-to-translate').value;

    
    function translateTerm() {
        
        //clear any previous searches
        translatedTermList.innerHTML = ''

        var termToTranslate = document.querySelector('#term-to-translate').value
        console.log(termToTranslate)
        // const listItem = document.createElement('li') 
        // listItem.innerHTML = termToTranslate
        // translatedTermList.appendChild(listItem)
    
        // Loop through each item in the collection array
	    glossary.forEach(item => {

            var termToTranslate = document.querySelector('#term-to-translate').value

            // myArray = JSON.parse(glossary);
            // myObj.title[0];
            // console.log(myObj.title[0])

            termFound = false;

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


	            })

                //if the term is not found, print this statement
                if (!termFound) {
                    translatedTermList.innerHTML = "Hmmmm....we couldn't find that one! Are you sure that's a Canadian term, eh?";
                }
        
            }

        // on click, run the translate function
        translateButton.onclick = () =>{
            translateTerm();
            console.log('translate');
        }
}

// Fetch gets your JSON file…
fetch('assets/glossary.json')
	.then(response => response.json())
	.then(glossary => {
		// And passes the data to the function, above!
		renderItems(glossary) // In order
	})


        // on click, run the translate function
        //translate function:
        //for each term, loop through the glossary json, or loop through the tags
        //if the searched term matches a tag,
        //display the name of the term (list item)
        //display the definition (list item)
        //display the americanized version
