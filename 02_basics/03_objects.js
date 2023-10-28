// Singleton
// Object.create


// Objects Literals

const mySym = Symbol("key1");

const JsUser = {
    name: 'Ram',
    age: 20,
    [mySym]: 'myKey1',
    location: 'ayodhya',
    email: 'ram@google.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
/*
    Objects ki bydefault string hota h
*/ 
// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser["name"], JsUser["age"], JsUser[mySym]);

JsUser.name = "shyam";
/*
when we use freeze Method in object so we doesn't upgrade object  
*/ 
// Object.freeze(JsUser);
// JsUser.name= "maa";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User")    
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`)    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());