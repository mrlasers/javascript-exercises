// create a variable named "bob" that can't be reassigned and give it the value "Robert"

const bob = 'Robert';

// print bob to the console

console.log(bob);

// create a variable named "nameTag" that can be reassigned and give it the value "Bob"

let nameTag = 'Bob';

// print nameTag to the console

console.log(nameTag);

// change the value of the nameTag variable to the value of the bob variable

nameTag = bob;

// print nameTag to the console again

console.log(nameTag);

// # NUMBERS

// create a variable named "magicNumber" with let and set it equal to 5

let magicNumber = 5;

// print magicNumber to the console

console.log(magicNumber);

// change the value of magicNumber to 23

magicNumber = 23;

// print magicNumber to the console again

console.log(magicNumber);

// change the value of magicNumber to 22 using the decrement operator

magicNumber--;

// print magicNumber to the console again

console.log(magicNumber);

// change the value of magicNumber back to 23 using the increment operator

magicNumber++;

// print the magicNumber to the console again

console.log(magicNumber);

// change the value of magicNumber to 46 using an assignment operator

magicNumber *= 2;

// print magicNumber to the console again

console.log(magicNumber);

// # STRINGS

// create a variable named helloMagicNumber with the value of "Hello, the magic number is 46!" using a template literal string

const helloMagicNumber = `Hello, the magic number is ${magicNumber}!`;

// print helloMagicNumber to the console

console.log(helloMagicNumber);

// create a variable to hold a magic number that you think Bob might like

const bobsMagicNumber = 69;

// using a template literal string, create a variable with the message "Bob's magic number is X", where "X" is Bob's magic number

const bobsMagicNumberMessage = `Bob's magic number is ${bobsMagicNumber}`;

// print Bob's magic number message to the console

console.log(bobsMagicNumberMessage);

// print the data type of Bob's magic number to the console

console.log(typeof bobsMagicNumber);

// print the data type of Bob's magic number message to the console

console.log(typeof bobsMagicNumberMessage);

// print the data type of the undefined value to the console (what do you think it will be?)

console.log(typeof undefined);

// print the data type of the null value to the console (what do you think this will be?)

console.log(typeof null);

// using the string concatenation operator, assign a variable the sentence 'The magicNumber is "[46]" and its type is "[number]", the value of null is "[null]" and its type is "[object]"', replacing the square bracketed text with expressions that will yield those results

const sentence =
  'The magicNumber is "' +
  magicNumber +
  '" and its type is "' +
  typeof magicNumber +
  ', the value of null is "' +
  null +
  '" and its type is "' +
  typeof null +
  '"';

// print the sentence to the console

console.log(sentence);
