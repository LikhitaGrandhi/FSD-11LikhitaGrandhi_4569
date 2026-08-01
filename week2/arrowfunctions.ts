// Traditional Function
function add2(a: number, b: number): number {
    return a + b;
}

// Arrow Function
const add3 = (a: number, b: number): number => {
    return a + b;
};

// Shorthand Arrow Function
const add4 = (a: number, b: number): number => a + b;
//Testing 
const a1: number =10;
const b1: number = 50;

// Function Calls
console.log(add2(a1,b1));
console.log(add3(a1,b1));
console.log(add4(a1,b1));
