//iterating an array ----------------------------
console.log("iterating an array ------------------");

numbers = [1,2,3];
for (let number of numbers) console.log(number);

numbers.forEach((number) => console.log(number));

numbers.forEach((number, index) => console.log(`[${index}]`, number));

numbers.forEach((number, index, array) => console.log(`[${index}]`, number, array));



//joining arrays ----------------------------
console.log("joining arrays ------------------");

numbers = [1,2,3];
let joined = numbers.join(",");
console.log(joined);

let message = "This is my message";
let messageParts = message.split(" ");
console.log(messageParts);
joined = messageParts.join("-");
console.log("URL: " + joined);
//useful in building URLs...



//sorting arrays ----------------------------
console.log("sorting arrays ------------------");

//for primitive types:
numbers = [1,4,2,3];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

//how to sort an array of objects?
//for objects:
courses = [
    {id:1, name: "Node.js"},
    {id:2, name: "javaScript"}
];

courses.sort(); //nothing happens...
console.log(courses);

//we have to pass a function to the sort() method
courses.sort(function(a,b){
    // a < b -> -1
    // a > b -> 1
    // a ===b -> 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);



//testing elements in arrays ----------------------------
console.log("testing elements in arrays ------------------");

numbers = [1,2,3,-4];

const allPositive = numbers.every((value) => value >= 0);
console.log(allPositive);

const somePositive = numbers.some((value) => value >= 0);
console.log(somePositive);



//filtering arrays ----------------------------
console.log("filtering arrays ------------------");


numbers = [1,2,-5,4,-2];

let filtered = numbers.filter(
    function(value){
        return value >=0
    }
);
//simplified way:
filtered = numbers.filter(n => n >= 0);
console.log(filtered);



//mapping arrays ----------------------------
console.log("mapping arrays ------------------");

numbers = [1, -1, 2, 3];
let items = numbers.map(n => '<li>' + n + '<li>');
let html = '<ul>' + items.join('') + '</ul>';

console.log(html);

items = numbers.map(
    function(number){
        const obj = {value: number};
        return obj;
    });
console.log(items);

//{} is considered by javascript engine as a code block...
//that is why this will not work:
items = numbers.map(n => {value: n});
console.log(items);

// we need to wrap in inside brackets ():
items = numbers.map(n => ({value: n}));
console.log(items);



//chaining ----------------------------
console.log("chaining ------------------");
numbers = [1, -1, 2, 3];

//without chaining, we need multiple variables to store results:
filtered = numbers.filter(n => n >= 0);
items = numbers.map(n => ({value: n}));
console.log(items);

//we can build a chain of methods:
items = numbers
.filter(n => n >=0)
.map(n => ({value: n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value);

console.log(items);



//reducing arrays ----------------------------
console.log("reducing arrays ------------------");

numbers = [1, -1, 2, 3];

//we can use a for-of loop...
let sum = 0;
for (let n of numbers) sum += n;

console.log("sum: " + sum);

//reduce() - better way
//to see the process
sum = numbers.reduce(
    function(accumulator, currentValue){
        console.log(accumulator + currentValue);
        return accumulator + currentValue;
    }
);

//final solution:
sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log("sum: " + sum);