function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10; i++) {
    let value = generateRandomIntegerInRange(-25, 25);
    if (value < 0) {
        console.log(value + '?')
    } else console.log(value)
}
