//functions -----------------------

//declarations vs expressions -----------------------
console.log("declarations vs expressions ----------------");

//function declaration
function print () {
    console.log("printing");
}

print();

//anonymous function expression
//variable print2 is referencing to that function
let print2 = function(){
    console.log("printing");
};

print2();

//named function expression
print3 = function print(){
    console.log("printing");
};

print3();

//references:
let print4 = print3;
print4();



//hoisting -----------------------
console.log("hoisting ----------------");
//function declarations are moved to the top by the javascript engine
//that is why we can call a function before its declaration in the code

//the same does not work for function expressions
//we have to create them before we are using them

//this would fail:
//test();
let test = function(){};




//arguments -----------------------
console.log("arguments ----------------");

//number of arguments in functions is flexible...
function sum(a,b){
    console.log(arguments)
    return a + b;
}

console.log(sum(1)); // 1 + undefinet -> NaN ... Not a Number
console.log(sum(1,2,3)); //it ignores the extra arguments

//sum function with flexible number of arguments
function total(){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}

console.log(total(1,2,3));



//rest operator -----------------------
console.log("rest operator ----------------");

function sum2(...args){
    console.log(args);
}

sum2(1,2,3,4);

function sum3(...args){
    return args.reduce((a,b) => a +b);
}

console.log(sum3(1,2,3));

function discoutns(discount, ...prices){
    const total = prices.reduce((a,b) => a +b);
    return total * (1-discount);
}

console.log(discoutns(0.2, 10,20,30) + "kr");



//default parameters -----------------------
console.log("default parameters ----------------");

function interest(loan, rate, years){
    rate = rate || 3.5; //default value
    years = years || 5
    return loan * rate / 100 * years;
}

console.log(interest(100000, 3.5, 30));
console.log(interest(100000));

function interest2(loan, rate = 3.5, years = 5){
    return loan * rate / 100 * years;
}

//after a parameter with a default value all following parameters
//must have a default value as well
//this will not work:
// function interest3(loan, rate = 3.5, years){
//     return loan * rate / 100 * years;
// }

// console.log(interest3(1000));



//getters and setters -----------------------
console.log("getters and setters -------");

let person = {
    firstName: "Tomas",
    lastName: "Pesek",
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith'; //setter
console.log(person); 
console.log(person.fullName); //getter



//try and catch -----------------------
console.log("try and catch ----------------");

//this will cause an error:
//person.fullName = true;

Object.defineProperty(
    person, 'fullName', 
    {set: function(value){
        if (typeof value !== 'string')
            throw new Error('Value is not a string');
        
        const parts = value.split(' ');
        
        if (parts.length !== 2)
            throw new Error("Enter the first and last name.")

        this.firstName = parts[0];
        this.lastName = parts[1];
    }});

    try {
        //person.fullName = true;
        //person.fullName = "Tomas";
        person.fullName = "Tomas Pesek";
    } catch (error) {
        alert(error);
    }



//local vs global scope -----------------------
console.log("local vs global scope ----------------");

{
    const message = "hi";
}

//console.log(message); //we get an error - not defined




//let vs var -----------------------
console.log("let vs var ----------------");

//use "let" and "const", avoid using "var"
//issues with "var" keyword:

function count(){
    for (var i = 0; i < 2; i++){
        console.log(i);
    }
    console.log(i); //i is accessible here because it is "var"

    if(true){
        var color = "blue";
    }
    console.log(color); // color is accessible because it is "var"
}

count();

var color = "red";
let age = 30;

//now check the "window" object in the browser.
//you will find our color variable...

function sayHi(){
    console.log("Hi!");
}

//now check the "window" object in the browser.
//you will find window.sayHi...



//"this" keyword -----------------------
console.log("\"this\" keyword ----------------");

//"this in the object"
let video = {
    title: "title",
    show(){
        console.log(this);
    }
};
video.show(); //we will see the video object

//"this" in the constructor function
function Video(title){
    this.title = title;
    console.log(this);
}
const v = new Video("video title"); //we will see new object

//"this" in the regular function
function playVideo(){
    console.log(this);
}

playVideo(); // we will see the window object

//special cases
video = {
    title: "video1",
    tags: ["tag1", "tag2", "tag3"],
    showTags(){
        this.tags.forEach(
            function(tag){console.log(this.title + ": " + tag)}, 
            this);
    }
}

video.showTags();



//changing "this" -----------------------
console.log("changing \"this\" ----------------");

//1. we can assign "this" to a variable...
video.showTags = function(){
    const self = this;
    this.tags.forEach(
        function(tag){console.log(self.title + ": " + tag)})
};

video.showTags();

//2. function is an object - we can use built-in methods:
playVideo.call({name:"Tomas"});

//bind returns a new function and sets "this" to given object:
const fn = playVideo.bind({name:"Tomas"}); 
fn();

playVideo.bind({name: "Tomas"})(); //points to the given object
playVideo(); //this will point to the window object:

//this leads us to a solution:
video.showTags = function(){
    this.tags.forEach(
        function(tag){
            console.log(this.title + ": " + tag)
        }.bind(this))
};

video.showTags();

//3. modern way: arrow function:
video.showTags = function(){
    this.tags.forEach(
        (tag) => console.log(this.title + ": " + tag))
};

video.showTags();






