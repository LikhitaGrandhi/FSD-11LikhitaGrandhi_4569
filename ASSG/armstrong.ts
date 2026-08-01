let num = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}

console.log(sum == num ? "Armstrong" : "Not Armstrong");