// Object Destructuring Below:

const person  = {
    name: 'Chris',
    age: 29, 
    location: {
        city: 'Los Angeles, CA',
        temp: 80
    }
};

const { name, age} = person;
console.log(`${name} is ${age}`); 
// const name = person.name; 
// const age = person.age; 

const { city, temp } = person.location; 
if (city && temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}.`)
}

const book = {
    title: 'Animal Farm',
    author: 'Orwell',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = "Self-Published"} = book.publisher;

console.log(publisherName)


//Array Destructuring: 

const address = ['123 Test Street', 'Los Angeles', 'CA', '91104'];

const [ , , state = "CA"] = address; //use comma if you dont want to destructuring first array item
//deafult works the same
console.log(`You are in ${city} ${state}`);

const item = ['Coffee(iced)', '$2.00', '$2.50', '$2.75'];

const [java, smallCost, medCost] = item;

console.log(`A medium ${java} cost ${medCost}`)