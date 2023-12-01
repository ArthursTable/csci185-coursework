const numbers = [65, 1800, 12, 20, 1963, 5000, 260, 0, 40, 953, 775, 67, 33];

// your code here:

let biggest = 65;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];
    }
}
console.log('The biggest number is:', biggest);