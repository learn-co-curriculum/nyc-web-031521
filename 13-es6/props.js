// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

// Variables -> POJO
  // Importance in Mod 2: 🔥

const name = "Eric Kim"
let age = 11
const eating = ["junk", "garbage"]

// const eric = {
//   name: name,
//   age: age,
//   eating: eating
// }

const eric = {name, age, eating}


// APPLICATION: 
  // JSON.stringify({name, age, eating})





// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

  // Importance in Mod 2: 🔥

  const whatIwantToDoMore = "eat";

  const newYearsResolution = {
    goal: "Write code every day",
    [whatIwantToDoMore]: "more"
  }


  newYearsResolution.whatIwantToDoMore
    // -> undefined

  newYearsResolution[whatIwantToDoMore]
    // -> "more"

// APPLICATION:
  // setState(
  //  {[evt.target.name] : evt.target.value }
  // )
