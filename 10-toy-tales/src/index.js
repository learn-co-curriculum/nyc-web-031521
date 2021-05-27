let addToy = false;
let toyCollectionDiv = document.querySelector("div#toy-collection")
let toyForm = document.querySelector(".add-toy-form")

fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(function(toysArr){
    // Object.keys(obj) or Object.values(obj)
    toysArr.forEach(function(toyObj){
      turnToyToCard(toyObj)
    })
    // toysArr.forEach(turnToyToCard)
  })




  
  
// {} -> <HTML EventListeners/>
function turnToyToCard(toy){
  let toyCardDiv = document.createElement("div")
    toyCardDiv.className = "card"

  let toyNameH2 = document.createElement("h2")
    toyNameH2.innerText = toy.name

  let toyImage = document.createElement("img")
    toyImage.src = toy.image
    toyImage.className = "toy-avatar"
    toyImage.alt = toy.name

  let likesP = document.createElement("p")
    likesP.innerText = `${toy.likes} Likes`

  let likeButton = document.createElement("button")
    likeButton.className = "like-btn"
    likeButton.innerText = "Like <3"

  toyCardDiv.append(toyNameH2, toyImage, likesP, likeButton)
  toyCollectionDiv.append(toyCardDiv)


  // Unstable elements get their evt listener in the place they are created
  likeButton.addEventListener("click", function(evt){
    
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    })
      .then(res => res.json())
      .then(function(updatedToyObj){
        toy.likes = updatedToyObj.likes
        // toy = updatedToyObj
        likesP.innerText = `${updatedToyObj.likes} Likes`
      })
  }) //LikeButton EvtListener ends here

} // turnToyToCard ends here









// Stable Element Evt Listener on global level
  // Rare for you to do this inside of another event listener
  
toyForm.addEventListener("submit", function(e){
  e.preventDefault()
  let newName = e.target.name.value
  let newImage = e.target.image.value
  // e.target.querySelectorAll("input") <- NodeList of all inputs
  // e.target.querySelector("[name='name']")

  fetch("http://localhost:3000/toys", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newName,
      image: newImage, 
      likes: 0 
    })
  })
    .then(res => res.json())
    .then(function(newToy){
      turnToyToCard(newToy)
    })


})







document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
