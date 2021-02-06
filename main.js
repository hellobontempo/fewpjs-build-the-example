// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph")
const errorDiv = document.getElementById("modal")

likeButtons.forEach(button =>{
  button.addEventListener('click', requestToServer)
})

function requestToServer(e){
  let heart = e.target
   mimicServerCall()
    .then(function(){  
      if(heart.innerHTML === EMPTY_HEART){ 
      heart.innerHTML = FULL_HEART
      heart.setAttribute('class', 'activated-heart')
    }else {
      heart.innerHTML = EMPTY_HEART
      heart.setAttribute('class', '')
    }
  })
      .catch(error => handleError(error))      
  }

//why didn't work when a separate function!?

// function handleClick(e){
//   if(e.target.innerHTML === EMPTY_HEART){ 
//     e.target.innerHTML = FULL_HEART
//     e.target.setAttribute('class', 'activated-heart')
//   }else {
//     e.target.innerHTML = EMPTY_HEART
//     e.target.setAttribute('class', '')
//   }
// }

function handleError(error){
  
  errorDiv.innerText = `${error}`
  errorDiv.setAttribute('class', '')
  window.setTimeout(function(){errorDiv.setAttribute('class', 'hidden')}, 5000)
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
