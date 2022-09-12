function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value = generateRandomIntegerInRange(-25, 25);
alert(value)

