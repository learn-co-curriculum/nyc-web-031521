// What is destructuring and why would I want to do it?
  // POJOs -> Variables
  // Importance in Mod 2: 🔥🔥🔥


  // let {key1, key2, ...} = OBJECT

  const phase1 = {
    name: "NYC SE 031521",
    population: 18,
    founded: 31521,
    pillarsOfJS: ["Event Listener", "DOM Manipulation", "Fetch"],
  }
 

  // const name = phase1.name;
  // const population = phase1.population;
  // const founded = phase1.founded

  const {name, population, founded} = phase1

  // const pillars = phase1.pillarsOfJS

  const {pillarsOfJS: pillars} = phase1



// Application: 
  // let {name, population, founded} = props.resource



// Could I do it to an array?
  // Importance in Mod 2: 🔥🔥🔥🔥

  // let [element1, element2, ...] = ARRAY

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // let brooklynVar = boroughNames[0]
  // let theBronx = boroughNames[2]
  // let queensVar = boroughNames[3]

  let [brooklynVar, , theBronx, queensVar] = boroughNames


// Application:
  // let [name, setName] = useState("Chicken")








// Could I do it to the parameters of a function?
  // Importance in Mod 2: 🔥🔥🔥🔥

  function greet({djName, name}) {
    // let {name, djName} = person
    return `Hello, ${ name }! Your DJ name is ${ djName }.`
  }

  const me = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    middleName: "Hank"
  }

  console.log(greet(me))


  // APPLICATION: Functional Components
  // {props} -> <HTML />

    // function ToyCard({name, image, likes, id}){
      // REACTY STUFF HERE
    // }

