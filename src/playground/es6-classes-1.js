class Person {
    constructor(name = 'Anonymous', age = 'Unknown'){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `My name is ${this.name} and I am ${this.age} years old`
    }

    getGreeting(){
        return `Hi I am ${this.name}`
    }
};

class Student extends Person {
    constructor(name, age, major = ''){
        super(name, age);
        this.major = major;
    }
    
    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description;
    }
};

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location
    }

    hasLocation(){
        return !!this.location
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasLocation){
            description = description + `They are currently in ${this.location}`
        }
        return description;
    }

}

const me = new Traveler('Sonam Klein', 30, 'History');
console.log(me.getDescription());

const other = new Traveler('Bob', 29);
console.log(other.getDescription());