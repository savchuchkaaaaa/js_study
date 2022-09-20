function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let minN = parseInt(prompt("Enter an integer number:"))
let maxN = parseInt(prompt("Enter an integer number:"))
for (let i = 1; i <= 10; i++) {
    console.log(generateRandomIntegerInRange(minN, maxN))
}
