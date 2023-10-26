const name = "Ram";
const repoCount = 50;

// console.log(name + repoCount + "Value")  /* It's not good way*/

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); /* It's good way*/

const gameName = new String('hello'); // create object in this sent

// console.log(gameName[0]);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-5, 1)
// console.log(anotherString);

const newStringOne = "  hitesh  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://jits.com/jits%20singh";
console.log(url.replace('%20', '-'));

