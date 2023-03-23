const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }


// SOLUTION

// Note: Resource used to help with solution: 'Three Ways to Title Case a Sentence in JavaScript' by Sonya Moisset
// https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/

// STEP 1: Function to title case a string, by combining the following steps

// 1. Split each title (a string) in the tutorials list into an array of strings to iterate over each word, with a space as the separator
// .split(' ') // e.g. title = ["what", "does" ...]

// 2. Map over each title (i.e. an array of strings) with an anonymous function as the callback function
// .map(function(word) {
//   return (word.slice(0,1).toUpperCase() + word.slice(1));
// })

// 3. Join each word to reform the title with a space in between each word
// .join(' ')

function upperCaseEachWord(title) {
  return title.split(' ').map(function(word) {
    return (word.slice(0,1).toUpperCase() + word.slice(1));
  }).join(' ');
}

// STEP 2: Function to apply title case function to each element in the tutorials array by using .map() method

function titleCased() {
  return tutorials.map(upperCaseEachWord);
}

// STEP 3: Console log output of titleCased function, to test solution

console.log(titleCased());