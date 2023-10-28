// Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// let myCreateDate1 = new Date(2023, 0, 23);
// console.log(myCreateDate1.toDateString());

// let myCreateDate2 = new Date(2023, 0, 23, 4, 9);
// console.log(myCreateDate2.toLocaleString());

// let myCreateDate3 = new Date("2023-01-14");
// console.log(myCreateDate3.toLocaleString());

let myCreateDate = new Date("01-18-2023");
// console.log(myCreateDate.toLocaleString());

// let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreateDate.getDate());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${NewDate.getDay()} and time`

newDate.toLocaleString('default', {
    weekday: 'long',
})
