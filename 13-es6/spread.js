// What is the spread operator and why would I want to use it?
  // Importance in Mod 2: 🔥🔥🔥🔥

  const pandemicEric = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    showering: false,
    eating: ["junk", "garbage"]
  }

  const regularStandardsOfLiving = {
    showering: true,
    eating: ["healthy", "clean"],
    exercise: "Lots"
  }


  // Later the spread, the higher the priority

  const newEric = {
    ...pandemicEric,
    ...regularStandardsOfLiving,
    vaccinated: true,
  }

  console.log(newEric);


// Application:
  // When you are setting state, spread operator is around the corner
    // When you want to change only one of the key value pairs (WITHOUT MUTATING STATE)
  // setState({...state, key1: newValue})



// Could I do it to an array?
  // Importance in Mod 2: 🔥🔥🔥🔥🔥

const bodyParts = ["head", "shoulders", "knees", "toes"];

const song = [...bodyParts, "knees", "toes", ...bodyParts, "knees", "toes"]

// Application:
  // When you are setting state, spread operator is around the corner
  // Creating elements on the DOM 
  // setState([...state, newThing])



// Could I do it to the parameters of a function?
  // Importance in Mod 2: 🔥🔥

  function canTakeFourArguments(arg1, arg2, arg3, arg4) {
    console.log(arg1, arg2, arg3, arg4)
  }

  canTakeFourArguments(...bodyParts)

  // APPLICATION:
    // <Component {...obj} />