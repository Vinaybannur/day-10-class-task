// call() --> Call invokes the function and allows you to pass in arguments one by one.

var person1 = {firstName: 'vinay', lastName: 'bannur'};
var person2 = {firstName: 'avinash', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); 
say.call(person2, 'Hello'); 

//apply()--> Apply invokes the function and allows you to pass in arguments as an array.

var person1 = {firstName: 'vinay', lastName: 'bannur'};
var person2 = {firstName: 'avinash', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); 
say.apply(person2, ['Hello']);

// bind()--> Bind returns a new function, allowing you to pass in a this array and any number of arguments.

var person1 = {firstName: 'vinay', lastName: 'bannur'};
var person2 = {firstName: 'avinash', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King