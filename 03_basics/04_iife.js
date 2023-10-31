// Immediately Invoked Function Expressions (Iife)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
}) ('ram');