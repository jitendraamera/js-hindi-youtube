const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'javascript',
        languagefile: 'js'
    },
    {
        languageName: 'java',
        languagefile: 'java'
    },
    {
        languageName: 'python',
        languagefile: 'py'
    }
];

myCoding.forEach( (items) => {
    console.log(items.languageName);
})