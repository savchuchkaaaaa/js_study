function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sum = 0

for (let i = 1; i <= 10; i++) {
    num = generateRandomIntegerInRange(10, 99)
    console.log(num)
    sum += num
}

console.log('Total sum: ' + sum)