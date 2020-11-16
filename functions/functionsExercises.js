//1.)---------------------------
//Write a function returning a sum of arguments
//number of arguments should be flexible
console.log(sum([1, 2, 3, 4]));

function sum(...items) { 
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items]; 

  return items.reduce((a, b) => a + b);
}



//2.)---------------------------
//Area of a circle
const circle = {
    radius: 1,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  };
  
  console.log(circle.area);



//3.)---------------------------
//Error handling - count occurrences function

try {
    const numbers = [1, 2, 3, 4]; 
    const count = countOccurrences(numbers, 1);
    console.log(count); 
  }
  catch (e) {
    console.log(e.message);
  }
  
  function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
      throw new Error('Invalid array.');
  
    return array.reduce((accumulator, current) => {
      const occurrence = (current === searchElement) ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
  }


