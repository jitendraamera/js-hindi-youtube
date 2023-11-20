// foreach m value return nhi hoti h or filter m value value return hoti h


// const coding = ["js", "ruby", "java", "python", "cpp"];

// const value = coding.forEach( (item) => {
//     console.log(item);
// } );

// console.log(value);

// const myNums = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// first way
// const val = myNums.filter( (num) => num > 4);
// console.log(val);

// second way
// const val = myNums.filter( (num) => {
//    return num > 4
// });
// console.log(val);


const books = [
    {title: 'book one', genre: 'history', publish: '2009', edition: 2014},
    {title: 'book two', genre: 'science', publish: '2011', edition: 2012},
    {title: 'book three', genre: 'history', publish: '2013', edition: 2015}
]

// const userbook = books.filter( (bk) => bk.genre === 'history');
 
const userbook = books.filter( (bk) => {
    return bk.genre === 'history' && bk.publish >= 2010
});
console.log(userbook);
