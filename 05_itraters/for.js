// For Loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }

for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value -> : ${i}`);
    for (let j = 1; j <=10; j++) {
        //  console.log(`inner loop value: ${j}`);
        // console.log(i + '*' + j + '=' + i * j); // tables 
    }
}

let myArr = ['Ram', 'shyam', 'murari'];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log('dedcted 5');
        break
    }
    console.log(`${i}`);
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log('dedcted 5');
        continue
    }
    console.log(`${i}`);
}