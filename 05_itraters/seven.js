// Map ************

const MyNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// const newNums = MyNumbers.map( (num) => num + 10)
// Chaning

const newNums = MyNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40);
console.log(newNums);

