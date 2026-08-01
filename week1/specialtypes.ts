// Program 1: Using 'any' with a number
let value: any = 10;
console.log(value);

// Program 2: Using 'any' with a string
let data: any = "Hello";
console.log(data);

// Program 3: Using 'any' with a boolean
let isWork: any = true;
console.log(isWork);

// Program 4: Function with void return type
function hello(): void {
    console.log("Hello");
}
hello();

// Program 5: Void function to display a number
function showNumber(): void {
    console.log(100);
}
showNumber();

// Program 6: Void function to display a welcome message
function welcome(): void {
    console.log("Welcome to TypeScript");
}
welcome();

// Program 7: Using 'unknown' with a number
let val: unknown = 50;
console.log(val);

// Program 8: Using 'unknown' with a string
let d: unknown = "TypeScript";
console.log(d);

// Program 9: Using 'unknown' with a boolean
let stat: unknown = true;
console.log(stat);