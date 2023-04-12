let datafile = "assets/glossary.json";

const wordContainer = document.querySelector('#wordofdaycontainer');
let itemDetails;

$(function() { 

    //get file  
    $.getJSON(datafile, function(data) {

    
            const listItem = document.createElement('li') 

            //Create the item details
            itemDetails =
                `
                    <h1 class = "current">${data[0].title}</h1>
                    <h2>Americanized:</h2>
                    <p>${data[0].americanized}</p>
                    <h2>Definition:</h2>
                    <p>${data[0].definition}</p>
                `;
            
            //add the item details to the list item
            listItem.innerHTML = itemDetails
            
            //Add the list item to the ul / translated terms list
            wordContainer.appendChild(listItem) // Then add the whole `li` into the `ul`

        
        function getTime() {
            let h = new Date().getHours()
            let m = new Date().getMinutes()
            let s = new Date().getSeconds()

            // let h = 22;
            // let m = 32;
            // let s = ;
            
            let time = h + ":" + m;
            console.log(time)

        if (h == 22 && m == 50 && s == 0) {
            console.log('hi')

            let randomNumber = Math.floor(Math.random() * 21)

            // wordContainer.removeChild(listItem)
            // block.classList.remove('current')

            const listItem = document.createElement('li') 
            
            //Create the item details
            // wordContainer.removeChild(listItem)
            let itemDetails =
                `
                    <h1>${data[randomNumber].title}</h1>
                    <h2>Americanized:</h2>
                    <p>${data[randomNumber].americanized}</p>
                    <h2>Definition:</h2>
                    <p>${data[randomNumber].definition}</p>
                `;
            
            //add the item details to the list item
            listItem.innerHTML = itemDetails
            
            //Add the list item to the ul / translated terms list
            wordContainer.appendChild(listItem) // Then add the whole `li` into the `ul`
        }
        
    };

    setInterval(getTime, 1000)
                
    });
});





    // if (h >= 0 && m >= 0 && s >= 0) {
        //     console.log('hi')
        // }
            

        // console.log(data[0].title)
        // console.log(data.title)

        

        // console.log(randomNumber)


        // for (let i = 0; i < data.length; i++ ){
        //     let terms = [data[i].title]
        //     // console.log(terms)
        //     console.log(terms.length);
        //     console.log(data[randomNumber].title)
        // }


        // Make the `li`
        
        // }