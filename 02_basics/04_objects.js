const tinderUser = new Object(); // Singleton Objects 
// const tinderUser ={}; // Non Singleton Objects
 
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Object Nesting

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Ram",
            lastName: "singh"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

// concat to one more array

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
const obj4 = {5: 'e', 7: 'f'};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 };

// console.log(obj3)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name')); // Output boolean type m aata h 

// ******************* Object De-Structure ****************

const course = {
    coursename: "js in hindi",
    price: '999',
    courseInstructor: 'hitesh'
}

const {courseInstructor: instructor} = course;
console.log(instructor);

// *************** Json API Introduction *************

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]