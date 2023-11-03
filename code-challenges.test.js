// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe("shuffleArray", () => {
//     it("removes the first item from the array and shuffles the remaining items.", () => {
//       expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"])),
//       expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron" ]))
//     })
//   })

// b) Create the function that makes the test pass.

// const shuffleArray = (array) => {
//     array.shift()
//     let j
//     for (let i = array.length - 1; i > 0; i--) {
//          j = Math.floor(Math.random() * (i + 1))
//         [array[i], array[j]] = [array[j], array[i]]
//     }
//     return array
    
// }
// console.log(shuffleArray(colors1))

const shuffleArray = (array) => {
    array.shift()
    array.sort(() => Math.random() - 0.5)
    return array
}
console.log(shuffleArray(colors1))
//[ 'pink', 'blue', 'green', 'yellow' ]
console.log(shuffleArray(colors2))
//[ 'indigo', 'saffron', 'periwinkle', 'aquamarine', 'ochre' ]

// Pseudo code:
// created a function called shuffle array
// used .shift to remove the first item in the array
//i trued to use a method called the fisher yates algorithm to shuffle the array but i couldnt get the array to shuffle it was returning an array with the first item removed in the array but still in the same order and im not sure what i was doing incorrectly
//i then created a new function called shuffleArray
//used .shift to remove the first item 
// .sort => math.random reorganizes the elements on a random comparison which is done with the math.random giving a random number 
//output an array that is shuffled
//im still having trouble getting the expected output to be the recieved output when i run yarn jest it says its recieving the array and its shuffled but its missing one of the elements and im not sure why because when i console log it the array has all of the elements shuffled except the first which is what its supposed to do but in the test it shows its missing one 
// expect(received).toEqual(expected) // deep equality
// Expected: ArrayContaining ["yellow", "blue", "pink", "green"]
// Received: ["green", "pink", "yellow"]



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// describe("endTally", () => {
//     it("returns the end tally.", () => {
//         const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31
//       expect(endTally(votes1)).toEqual(11),
//       expect(endTally(votes2)).toEqual(-31)
//     })
//   })

// // b) Create the function that makes the test pass.

// const endTally = (votes) => {
//     return votes.upVotes - votes.downVotes
    
// }
// console.log(endTally(votes1))
// console.log(endTally(votes2))

// Pseudo code:
// created a function called endTally
//input votes as my parameter
// votes.upvotes accesses the value of upvotes in the array then subtracts the downvotes
//output the number of upvotes - downvotes 