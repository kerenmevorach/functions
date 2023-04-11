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
        const listItem = document.createElement('li') 
        listItem.innerHTML = termToTranslate
        translatedTermList.appendChild(listItem)
    
        // Loop through each item in the collection array
	    glossary.forEach(item => {

            // myArray = JSON.parse(glossary);
            // myObj.title[0];
            // console.log(myObj.title[0])

            for (let i in item.tags) {
                //this for loop converts the input text, finds the corresponding image, and displays it on the page
                if (termToTranslate.includes(i)) {

                    // Make the `li`
                    const listItem = document.createElement('li') 

                    //Create the item details
                    const itemDetails =
                        `
                            <h2 class="term">${item.title[i]}</h2>
                            <h3>Definition:</h3>
                            <p class="definition">${item.definition[i]}</p>
                            <h3>Americanized:</h3>
                            <p>${item.americanized[i]}</p>
                            <div class="line"></div>
                        `
            
                    //Add the item details to the list item
                    listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
            
                    //Add the list item to the ul or translated terms list
                    translatedTermList.appendChild(listItem) // Then add the whole `li` into the `ul`
                    }
                 }
	            })

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
