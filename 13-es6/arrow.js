// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?
   // Arrow Function
   // Single Line
   // No Curlies
   
//    res => res.json()

// Importance in Mod 2: 🔥🔥🔥🔥🔥









let arrayOfNumbers = [100, 23, 21, 192, 231]
let arrayOfStrings = ["zebra", "aardvark", "penguin", "chicken", "beef"]
let arrayOfObjs = [{name: "zebra"}, {name: "aardvark"}, {name: "penguin"}]


// ******* MAP

    // Map returns a new transformed array of the same size
        // Callback needs to return the transformation

    let doubleNumbers = arrayOfNumbers.map(function(number){
        return number * 2
    })

    let doubleNumbers2 = arrayOfNumbers.map(num1 => num1 * 2)

// *******



// ******* FILTER

    // Filter returns a subarray of the same elements
        // Callback needs to return a boolean

    let onlyEvenNumbers = arrayOfNumbers.filter(function(number){
        return number % 2 === 0 
    })

    let onlyEvenNumbers2 = arrayOfNumbers.filter(num => num % 2 === 0 )
// *******


// ******* SORT

    // Sort mutates the original array
        // Callback needs to return a number (positive or negative)

    let copyOfNums = [...arrayOfNumbers]

    copyOfNums.sort(function(num1, num2){
        return num1 - num2
    })

    arrayOfStrings.sort(function(str1, str2){
        return str1.localeCompare(str2)
    })

    arrayOfObjs.sort(function(obj1, obj2){
        return obj1.name.localeCompare(obj2.name)
    })

// *******
