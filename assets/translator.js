// Function to render your items
const renderItems = (glossary) => {
	// The `ul` where the items will be inserted
    const translatedTermList = document.querySelector('#translated-term-container');
    const translateButton = document.querySelector('.translate-button');
    const termToTranslate = document.querySelector('#term-to-translate').value;

    
    // on click, run the translate function
    translateButton.onclick = () =>{
        translateTerm();
        console.log('translate');
    }

    function translateTerm() {
        console.log('translate');

        //clear what's already in the innterHTML
        // translatedTermList.innerHTML = ''

        // Loop through each item in the collection array
	    glossary.forEach(item => {

            myArray = JSON.parse(glossary);
            myObj.title[0];
            console.log(myObj.title[0])

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

        // on click, run the translate function
        //translate function:
        //for each term, loop through the glossary json, or loop through the tags
        //if the searched term matches a tag,
        //display the name of the term (list item)
        //display the definition (list item)
        //display the americanized version




        for (var i of termToTranslate.toLowerCase()) {


            myArray = JSON.parse(glossary);
            item.title[0];
            console.log(item.title[0])
            


            //this for loop converts the input text, finds the corresponding image, and displays it on the page
            // if (termToTranslate.includes(i)) {
            //   //make a list item
            // //   glossary.forEach(item => {

         

            //   const listItem = document.createElement('li')

            //   const itemDetails =
            //       `
            //           <h2 class="term">${item.title}</h2>
            //           <h3>Definition:</h3>
            //           <p class="definition">${item.definition}</p>
            //           <h3>Americanized:</h3>
            //           <p>${item.americanized}</p>
            //           <div class="line"></div>
            //       `
      
            //   listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
            //   listItem.classList.add('word-set')
      
            //   translatedTermList.appendChild(listItem) // Then add the whole `li` into the `ul`


            //   document.getElementById(
            //     'inputContainer',
            //   ).innerHTML += `<img src="images/${i}.png"  class=letterimages>`
            // //   })
            // }
          }

    }

}

// Fetch gets your JSON file…
fetch('assets/glossary.json')
	.then(response => response.json())
	.then(glossary => {
		// And passes the data to the function, above!
		renderItems(glossary) // In order
	})

