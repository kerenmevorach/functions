// Function to render your items
console.log('hi')

// Function to render your items
const renderItems = (glossary) => {
	// The `ul` where the items will be inserted
	const glossaryList = document.getElementById('glossary-container')


	// Loop through each item in the collection array
	glossary.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
			 	<div class="bullet-and-term">
				 	<div class="bullet"></div>
					<h1 class="term">${item.title}</h1>
				</div>
				<aside>
					<p>${item.americanized}</p>
					<p class="definition">${item.definition}</p>
				</aside?
			`

		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		glossaryList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file…
fetch('assets/glossary.json')
	.then(response => response.json())
	.then(glossary => {
		// And passes the data to the function, above!
		renderItems(glossary.reverse()) // In reverse order
	})




//make a j.son file

// Word of the day: 
//each day at 12:00AM, pick a random number
//random number * length of json file list
//whatever that number is - display that number term, definition, and example on the page. 
//eg. random number is 9, so display the 9th term and its info

// Translator:
//create text user input
// Loooooooong conditional with all the terms and their respective info
// If user input is ___, the definition is ___ and example is ____. 
// If user input = term[0], the definition is definition[0] and example is example[0]. 
// Is there any way to do this with the j.son file? 
//Look up the word in the json file, find the corresponding definition and example. 

// Glossary: 
//loop through each set of header, definition and example.
//term[0]
//definition[0]
//example[0]
//etc.

//jk nvm
//loop through each set of terms, display that on the page.
//if the user clicks on a specific term, term[i], then add definition[i], and exmaple etc. 
//basically have all the terms - and if that term is opened, display corresponding info 
//maybe make a template in html, and have it be visible vs not 
//create list
//add list items - title, def, ex
//when list title is clicked, add 2 more list items 
//is there a pop up with the definition?