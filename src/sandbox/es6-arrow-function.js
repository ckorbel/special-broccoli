// function square (x) {
//     return x * x;
// };
// // const squareArrow = (x) => {
// //     return x * x;
// // }; 
// const squareArrow = (x) => x * x;
// console.log(squareArrow(4)); 
// const getFirstName = (fullName) => fullName.split(' ')[0];
// console.log(getFirstName('Steve Williams'));

//arguments object -- no longer bound w/ arrow functions 


// const add = (a, b) => {
//     // console.log(arguments); //argument wont work with arrow functions
//     return a + b;
// };
// console.log(add(55, 1, 1001));

//this keyword -- no longer bound:
// const user = {
//     name: 'Chris',
//     cities: ['San Jose', 'Azusa', 'Pasadena'],
//     printPlacesLived () {
//         const cityMessages = this.cities.map((city) => { 
//             return this.name + ' has lived in ' + city + '!'; //map method doesn't affect the array just the items it's returning
//         });
//         return cityMessages;
//     }
// };

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 6, 10],
    multiplyBy: 2,
    multiply () {
        const multipliedNumbers = this.numbers.map((number) => {
            return number * this.multiplyBy;
        });
        return multipliedNumbers;
    }
};
console.log(multiplier.multiply());