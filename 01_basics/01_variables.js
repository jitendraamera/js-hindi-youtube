const accountId= 12345;
let accountEmail="jitendrasingh@google.com";
var accountPassword= "54321";
accountCity="jaipur";
let accountState;
// accountId=987; // can't change const type variable

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail='js@google.com';
accountPassword="547921";
accountCity="mumbai";

 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// console.log(accountCity);