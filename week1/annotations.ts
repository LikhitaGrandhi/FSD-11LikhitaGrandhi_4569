// Program 1: Variable Annotations
let na: string = "Likhita";
let age_student: number = 20;
let isStudent: boolean = true;

console.log("Name:", na);
console.log("Age:", age_student);
console.log("Student:", isStudent);

// Program 2: Function Return Type Annotation
function add1(a: number, b: number): number {
    return a + b;
}

let result = add1(10, 20);
console.log("Sum:", result);

// Program 3: Array Type Annotation
let numbers: number[] = [10, 20, 30, 40];

for (let num of numbers) {
    console.log(num);
}