//1.)----------------------------------------------------
//Array from range
let numbers = arrayFromRange(1, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
  return output;
}



//2.)----------------------------------------------------
//includes()

numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}



//3.)----------------------------------------------------
//except()

numbers = [1, 2, 3, 4];

let output = except(numbers, [1, 2]);

console.log(output); 

function except(array, excluded) {
  const output = []; 
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element); 
  return output; 
}



//4.)----------------------------------------------------
//moving an element: move()

numbers = [1, 2, 3, 4];

output = move(numbers, 1, 3);

console.log(output); 

function move(array, index, offset) { 
  const position = index + offset;  
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return; 
  }
  
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}



//5.)----------------------------------------------------
//count occurrences:

numbers = [1, 2, 3, 4];

let count = countOccurrences(numbers, 1);

console.log(count); 

function countOccurrences(array, searchElement) {
  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}



//6.)----------------------------------------------------
//get max:

numbers = [1, 2, 3, 4];

let max = getMax([]);

console.log(max); 

function getMax(array) { 
  if (array.length === 0) return undefined; 

  // let max = array[0];

  // for (let i = 1; i < array.length; i++)
  //   if (array[i] > max)
  //     max = array[i];

  // return max; 

  return array.reduce((a, b) => (a > b) ? a : b);
}

//7.)------------------------------------------
//sorting, filtering and mapping:

const movies = [
    {title: "a", year: 2018, rating: 4.5},
    {title: "b", year: 2018, rating: 4.7},
    {title: "c", year: 2018, rating: 3},
    {title: "d", year: 2017, rating: 4.5}
];

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);
