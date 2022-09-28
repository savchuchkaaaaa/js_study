const birthDay = prompt('Enter your birth day:')
console.log(Math.ceil((Date.parse(birthDay) - Date.now()) / 1000 / 60 / 60 / 24))
