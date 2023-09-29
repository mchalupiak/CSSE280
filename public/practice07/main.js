// Q1
console.log("Q1");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
console.log();

// Q2
console.log("Q2");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log();

// Q3
console.log("Q3");
const numbers = [1, 2, 3, 4, 5]
let sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log();

// Q4
console.log("Q4");
const student = { name: 'John', age: 20, grade: 'A' };
for (const key in student) {
    console.log(`${key}`);
}
console.log();

// Q5
console.log("Q5");
const book = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };
for (const key in book) {
    console.log(`${book[key]}`);
}
console.log();

// Q6
console.log("Q6");
const colors = ['red', 'green', 'blue', 'yellow'];
for (const color of colors) {
    console.log(color);
}
console.log();

// Q7 same as Q3
console.log("Q7 same as Q3\n");

// Q8
console.log("Q8");
const temperatures = [32, 68, 75, 82, 56];
temperatures.forEach((temp) => { 
    let val = (temp - 32) * 5/9;
    console.log(val);
});
console.log();

// Q9
console.log("Q9");
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
for (const city of cities) {
    console.log(`${city}: ${populations[city]}`);
}
console.log();

// Q10
console.log("Q10");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
console.log();
