// write your code here

let ramenMenuDiv = document.querySelector("#ramen-menu")

let ramenDetailDiv = document.querySelector("#ramen-detail")

let mainRamenImg = ramenDetailDiv.querySelector("img")
let mainRamenNameH2 = ramenDetailDiv.querySelector(".name")
let mainRamenRestaurantH3 = ramenDetailDiv.querySelector("h3.restaurant")

let ratingInput = document.querySelector("#rating")
let commentTextarea = document.querySelector("#comment")
let entireForm = document.querySelector("#ramen-rating")

let displayRamen = {}


fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(function(ramensArr){
        ramensArr.forEach(function(ramenObj){
            let ramenImage = document.createElement("img")

            ramenImage.src = ramenObj.image
            ramenImage.alt = ramenObj.name

            ramenMenuDiv.append(ramenImage)

            ramenImage.addEventListener('click', function(){
                // fetch(`http://localhost:3000/ramens/${ramenObj.id}`)
                    // .then(res => res.json())
                    // .then(function(ramenObj){
                        mainRamenImg.src = ramenObj.image
                        mainRamenNameH2.innerText = ramenObj.name
                        mainRamenRestaurantH3.innerText = ramenObj.restaurant
        
                        ratingInput.value = ramenObj.rating
                        commentTextarea.value = ramenObj.comment
                        // entireForm.dataset.id = ramenObj.id
                        displayRamen = ramenObj
                    // })

            }) //Click Event Ends Here
            
        }) // forEach ends here
    }) // then ends here
    
    
    
    
entireForm.addEventListener("submit", function(e){
    e.preventDefault()
    let ramenId = displayRamen.id
    // let ramenId = e.target.dataset.id

    // let newRating = e.target.rating.value
    let newRating = ratingInput.value

    // let newComment = e.target.comment.value
    let newComment = commentTextarea.value

    fetch(`http://localhost:3000/ramens/${ramenId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            rating: newRating,
            comment: newComment
        })
    })
        .then(res => res.json())
        .then(updatedRamen => { 
            displayRamen.rating = updatedRamen.rating
            displayRamen.comment = updatedRamen.comment
        })

})







