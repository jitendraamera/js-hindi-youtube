const user = {
    userName: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website `);
    }
}

// user.welcomeMessage()
// user.userName = "Ram"
// user.welcomeMessage()

// console.log(this)
 
// function chai(){
//     let userName = "ram";
//     // console.log(this);
// }

// chai();

// const chai = function(){
//     let userName = "Ram";
//     console.log(this.userName);
// }

// const chai = () => {
//     let userName = "Ram";
//     console.log(this.userName);
// }

// chai();

// ******* First type arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// ******* Second type arrow function

// const addTwo = (num1, num2) => num1 + num2

// ******* Third type arrow function

// const addTwo = (num1, num2) => (num1 + num2)

// pass Object in arrow function
const addTwo = (num1, num2) => ({name: 'ram'})

console.log(addTwo(5,2));