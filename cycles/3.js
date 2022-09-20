function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 8; i++) {
    let value = generateRandomIntegerInRange(5, 50);
    if (value % 3 == 0) {
        console.log('#' + value)
    } else console.log(value)
}