namespace MathOperations{

    export function add(a:number,b:number){
        return a+b;
    }

    export function subtract(a:number,b:number){
        return a-b;
    }

    export function multiply(a:number,b:number){
        return a*b;
    }

    export function divide(a:number,b:number){
        return a/b;
    }
}

console.log(MathOperations.add(5,2));
console.log(MathOperations.subtract(5,2));
console.log(MathOperations.multiply(5,2));
console.log(MathOperations.divide(5,2));