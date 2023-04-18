//references
//https://www.youtube.com/watch?v=kIRp6HOQzP8
//https://www.w3schools.com/js/js_json_arrays.asp
//https://www.w3schools.com/js/js_json_objects.asp
//https://stackoverflow.com/questions/45615509/search-through-json-with-keywords

let datafile = "assets/glossary.json";

const body = document.querySelector('body');
const translateButton = document.querySelector('.translate-button');
const translatedTermList = document.querySelector('#translated-term-container');
const selectedTermList = document.querySelector('#selected-term-container');


$(function() { 

    //get file  
    $.getJSON(datafile, function(data) { 
        // console.log(data)

        //get the term from the list 
        function getTerm() {

            //clear 
            translatedTermList.innerHTML = ''
    
            let termToTranslate = document.querySelector('#term-to-translate').value.toString().toLowerCase();
            
            console.log(termToTranslate);

            let termFound = false;

            data.forEach((item) => {

                if (item.tags.includes(termToTranslate)) {

                    termFound = true;
    
                    // Make the `li`
                    const listItem = document.createElement('li') 

                    //Create the item details
                    const itemDetails =
                        `
                            <div class="menuitem">
                                <h3>${item.title}</h3>
                            </div>
                        `;
            
                    //add the item details to the list item
                    listItem.innerHTML = itemDetails;
                    //add this cute little class
                    listItem.classList.add('word-set');

                    //Add the list item to the ul 
                    translatedTermList.appendChild(listItem)
                    }

                    //if term isn't in the list, don't show anything
                    if (!termFound) {
                        const listItem = document.createElement('li') 
                        listItem.innerHTML = "";
                        translatedTermList.appendChild(listItem)
                    }
            });
        
        };

        function searchTerm() {

            //clear any previous searches
            selectedTermList.innerHTML = ''
    
            //get term value, make it lowercase
            let termToTranslate = document.querySelector('#term-to-translate').value.toString().toLowerCase();
            
            console.log(termToTranslate);

            if (termToTranslate == "") {
                // clear
                selectedTermList.innerHTML = '';
        
                // add message
                const listItem = document.createElement('li') 
                listItem.innerHTML = "<p>Hey there hozer, you have to search something!</p>";
                selectedTermList.appendChild(listItem);
                
            }
            
            else {
                // clear
                selectedTermList.innerHTML = '';
        
                let termFound = false;

            data.forEach((item) => {

                if (item.tags.includes(termToTranslate)) {

                    termFound = true;
    
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
                    listItem.innerHTML = itemDetails;
                    listItem.classList.add('word-set');

                    //Add the list item to the selected terms list
                    selectedTermList.appendChild(listItem) 
                    }
                
            });

            if (!termFound) {
                const listItem = document.createElement('li') 
                listItem.innerHTML = "<p>Hmmmm....we couldn't find that one! Are you sure that's a Canadian term, eh?</p>";
                selectedTermList.appendChild(listItem)
            }
            
            };
            
        };


    
        let translateBox = document.querySelector('#term-to-translate')
        
        translateBox.oninput = () =>{
            getTerm();
            console.log('translate');
            translatedTermList.classList.add('active');
            translatedTermList.style.display = "block";
            const wordSet = document.querySelectorAll('.word-set');    
            translateBox.style.color = "black";
    
            wordSet.forEach((menuitem) => {
                menuitem.querySelector('.menuitem').onclick = () =>{
                    console.log(menuitem);
                    let selectedItem = menuitem.querySelector('h3').textContent;
                    translateBox.value = selectedItem;
                    translatedTermList.classList.remove('active');
                    translatedTermList.style.display = "none";

                    translateButton.onclick = () =>{
                        searchTerm();
                        console.log('translate')
                    }
                }

            })	
        }

        body.onclick = () =>{
            translatedTermList.style.display = 'none';
            console.log('button');
        }
        
    });
    
});