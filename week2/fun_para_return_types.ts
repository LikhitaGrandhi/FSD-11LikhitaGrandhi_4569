// Function which returns a string
function place(name: string): string {
    return `I am from ${name}`;
}

// Function which returns number
function ageof(num: number): number {
    return num;
}

//Function which returns boolean value
function isAdult(age: number): boolean {
    return age >= 18;
}

console.log(place("Vizag")); //I am from Vizag
console.log(ageof(20)); //20
console.log(isAdult(15)); // false

//Default Parameters
// Function with default parameter
function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

function add(a: number = 10, b: number = 20): number {
    return a + b;
}


function studentStatus(isStudent: boolean = true): string {
    if (isStudent) {
        return "Student";
    } else {
        return "Not a Student";
    }
}

console.log(greet()); //Hello Guest
console.log(greet("Likhita"));// Hello Likhita
console.log(add()); //30
console.log(studentStatus(false)); // Not an student

// Function with rest parameters
function fruits(...items: string[]): void {
    console.log(items);
}

fruits("Apple", "Mango", "Orange");

// Function with optional parameter
function employee(name: string, salary?: number): void {
    console.log("Employee Name:", name);
    if (salary !== undefined) {
        console.log("Salary:", salary);
    }
}
employee("Rahul");
