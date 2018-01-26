//note this new syntax for the the constructor allows you to eliminate binding methods but it is only possible with the 
//babel plugin     "plugins": [
    //     "transform-class-properties"
    // ]


class OldSyntax {
    constructor() {
        this.name = 'Hello';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hello my name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());