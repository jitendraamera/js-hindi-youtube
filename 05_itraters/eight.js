// const MyNumbers = [1, 2, 3];

// const myTotal = MyNumbers.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and ${currval}`)
//     return acc + currval;
// }, 0)

// const myTotal = MyNumbers.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal);

const shopingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 3999
    }
];

const shpcrtTotal = shopingCart.reduce( (acc, items) => acc + items.price, 0);
console.log(shpcrtTotal);