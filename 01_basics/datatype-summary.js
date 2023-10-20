// # Primitive Datatype

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
//  console.log(id === anotherId);

const bigNumber = 324355577874334334n;

// # Refrence Datatype (Non primitive)

//  Array, Objects, Function

const heros = ["ram", "shyam", "siya"];

let myObj = {
    name: "ram",
    age: 22
}

const myFunction = function(){
    console.log("Hello Ram")
}
console.log(typeof myFunction);