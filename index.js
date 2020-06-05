//document.addEventListenerDOMContentLoaded

//console.log('are we linked up?')

//select body of html with JS

//create html paragraph tag
//insert text into paragraph tag with JS
//append paragraph element to selected body tag

//let container = document.querySelector('#container')
//let message = document.createElement('p')

//message.innerHTML = "Hello sweet world"
//container.appendChild(message)

document.addEventListener('DOMContentLoaded', function(){
    console.log('are we linked up?');
    // [x] select container div of HTML with JavaScript
    // [x] create HTML paragraph tag "" ""
    // [x] insert text into paragraph tag "" ""
    // [] append paragraph element to selected container
    let container = document.querySelector('#container')
    let message = document.createElement('p')
    message.innerHTML = "Hello Sweet World"
    container.appendChild(message)
  })