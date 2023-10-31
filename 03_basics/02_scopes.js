let a = 300;
if(true) {
    let a = 10;
    // console.log(`inner side : ${a} `);
}

// console.log(a);

// Nested Scope *******************************

function one(){
    const username = "Ram";

    function two(){
        const website = "youtube";
        // console.log(username);
    }

    // console.log(website)
    two();
}

one();


if(true){
    const username = "Ram";

    if(username === "Ram"){
        const website = " youtube";
        console.log(username + website);
    }

    // console.log(website)
}

// console.log(username);


// ***************** Interesting *************************

function addone(num){
    return num  + 1;
}

console.log(addone(5));

const addTwo = function(num){
    return num + 1;
}

addTwo(5)
