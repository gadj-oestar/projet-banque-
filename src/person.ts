export class Person {
    name: string;
    prenom: string;
    age: number;

    constructor(name: string, prenom: string, age: number) {
        this.name = name;
        this.prenom = prenom;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} ${this.prenom} and I am ${this.age} years old.`);
    }
}

let p1 = new Person('John', 'Doe', 30);

console.log(p1.greet());

