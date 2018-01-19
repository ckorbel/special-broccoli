var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'; //cannot redefine in other words no let nameLet = 'something'; only reassign no redefine.
console.log('nameLet', nameLet);

const nameConst = 'Frank'; //const cannot be redefined or reassgined.
console.log('nameConst', nameConst); 

//Block scoping 

const fullName = 'Chris Korbel';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);