let firstname= "Yasaman";
console.log(firstname.length);

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));

const string = 'The morning is upon us.';
console.log(string.slice(-3, -1));

const aString = 'Yasaman';
console.log(aString.substr(-1, 1));

let text = "Mr Blue has a blue house and a blue car";
let result = text.replace("blue", "red");
console.log(result)
let result2= text.replaceAll("blue" , "red")
console.log(result2)

let hello = "       Hello World!        ";
console.log(hello.trim())
console.log(hello.trimEnd())
console.log(hello.trimStart())

console.log('abc'.padStart(6,"123465"));
console.log('abc'.padStart(10, "foo"));
console.log('abc'.padEnd(10));
console.log('abc'.padEnd(10, "foo"))

let text1= "Hello world, welcome to the universe.";
console.log(text1.indexOf('w',7))
console.log(text1.lastIndexOf("w"))

let text3='Hello World! ';
console.log(text3.repeat(2))

let text4 = "How are you doing today?";
console.log(text4.split(" " ,3))




