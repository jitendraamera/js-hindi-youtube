function myName(){
    console.log("R");
    console.log("a");
    console.log("m");
}

// myName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("result: ", result)

/*
 Return k bad kuch b print nhi hota h
*/ 

function loginUserMessage(username="shyam"){
    // if(username === undefined){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Ram"));

function calculatecartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatecartPrice(200, 400, 500, 800));


// rest oprator (...) jo ki multi arguments ko array m convert krta h

const user = {
    username: "Ram",
    price: 199
}

function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user);
// direct object in argument
handleObject({
    username: "shyam",
    price: 399
});

const myNewArray = [200, 400, 700, 800];

function returnSecondvalue(getvalue){
    return getvalue[1];
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 300, 700, 800]));
