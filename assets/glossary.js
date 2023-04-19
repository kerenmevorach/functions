// Function to render your items
const renderItems = (glossary) => {
	// The `ul` where the items will be inserted
	const glossaryList = document.getElementById('glossary-container')


	// Loop through each item in the collection array
	glossary.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		//add class

		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
			 	<button class="bullet-and-term">
				 	<div class="bullet"></div>
					<h1 class="term">${item.title}</h1>
				</button>
				<aside>
					<h3>Definition:</h3>
					<p class="definition">${item.definition}</p>
					<h3>Americanized:</h3>
					<p>${item.americanized}</p>
				</aside>
				<div class="line"></div>
			`

		listItem.innerHTML = itemDetails;
		listItem.classList.add('word-set');

		glossaryList.appendChild(listItem); // Then add the whole `li` into the `ul`
	})

	const wordSet = document.querySelectorAll('.word-set');



	wordSet.forEach((bulletTerm) => {
		bulletTerm.querySelector('.bullet-and-term').onclick = () =>{
			console.log('hi')
			bulletTerm.classList.toggle('active')
		}
})	
}


// Fetch gets your JSON file…
fetch('assets/glossary.json')
	.then(response => response.json())
	.then(glossary => {
		// And passes the data to the function, above!
		renderItems(glossary) 
	})

