// 1. create a function using map method that takes an array of numbers and returns an array of the same numbers multiplied by 2
function multiplyByTwo(arr) {
  // your code here
}

const numbers = [1, 2, 3, 4, 5];
const result1 = multiplyByTwo(numbers);
console.log(result1); // Should be: [2, 4, 6, 8, 10]


/* 2. create a function that takes all the videogame information of 
an array and returns a new array with the names of the videogames and 
the price of each one with a 10% discount with the following format:
[{name: 'game1', priceWithDiscount: 90}, {name: 'game2', priceWithDiscount: 80}] etc */

const videogames = [
  { name: "Breath of the wild", price: 80 },
  { name: "Super Mario Odyssey", price: 90 },
  { name: "The Legend of Zelda: A Link to the Past", price: 70 },
  { name: "The last of us 3", price: 60 },
  { name: "The Witcher 3", price: 50 },
];

function getVideogamesWithDiscount(arr) {
  // your code here
}

const result2 = getVideogamesWithDiscount(videogames);
console.log(result2); 
/* 
Result should be:
[
  { name: 'Breath of the wild', priceWithDiscount: 72 },
  { name: 'Super Mario Odyssey', priceWithDiscount: 81 },
  { name: 'The Legend of Zelda: A Link to the Past', priceWithDiscount: 63 },
  { name: 'The last of us 3', priceWithDiscount: 54 },
  { name: 'The Witcher 3', priceWithDiscount: 45 }
] 
*/

/* 3. Use filter method to create a function that takes an array of books and returns a new 
array of books that have more than 300 pages.
The format of the new array should be: [{name: 'book1', pages: 400}, {name: 'book2', pages: 500}] etc */

const books = [
  { name: "The Lord of the Rings", pages: 500 },
  { name: "Harry Potter and the Philosopher's Stone", pages: 300 },
  { name: "The Hobbit", pages: 400 },
  { name: "The Chronicles of Narnia", pages: 200 },
  { name: "The Little Prince", pages: 100 },
];

function getBooks(arr) {
  // your code here
}

const result3 = getBooks(books);
console.log(result3);
/*
Result should be:
[
  { name: 'The Lord of the Rings', pages: 500 },
  { name: 'The Hobbit', pages: 400 }
]
*/

/* 4. Use reduce method to create a function that takes an array of products and returns the total quantity of all the products.
The response must be a number. */

const products = [
  { name: "Samsung Smart TV", quantity: 30 },
  { name: "iPhone 12", quantity: 20 },
  { name: "Macbook Pro", quantity: 10 },
  { name: "Lenovo ThinkPad", quantity: 40 },
  { name: "Dell XPS", quantity: 50 },
];

function getTotalQuantity(arr) {
  // your code here
}

const result4 = getTotalQuantity(products);
console.log(result4); // Final result should be: 150