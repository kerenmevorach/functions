const header = document.querySelector('h1');
const bigTitle = document.querySelector('.big-title');
const caret = document.querySelector('#caret');
const descriptionContainer = document.querySelector('.description-container');


function scrollHeadline() {

    if (document.documentElement.scrollTop > 30) {
        console.log('scroll')
        header.classList.remove('big-title')
        header.classList.add('small-title')
        caret.style.opacity = "0"
       
    } else {
        header.classList.remove('small-title')
        header.classList.add('big-title')
        caret.style.opacity = "1"
    }
}

window.addEventListener("scroll", scrollHeadline);

function scrollToggle(x) {
    if (x.matches) { 
      console.log('add')
      window.addEventListener("scroll", scrollHeadline);
    } else {
      console.log('remove')
      window.removeEventListener("scroll",scrollHeadline);
    }
  }

  
  let x = window.matchMedia("(min-width: 1100px)")
  scrollToggle(x) // Call listener function at run time
  x.addListener(scrollToggle) // Attach listener function on state changes