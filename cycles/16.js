function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sum = 0

for (let i = 1; i <= 8; i++) {
    num = generateRandomIntegerInRange(10, 99)
    console.log(num)
    if (num % 2 == 0) {
        sum += num
    }
}

console.log('Total sum: ' + sum)