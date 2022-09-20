let i = 0
while (i < 1000) {
    num = prompt('Enter an integer number:')
    if (num > 0) {
        console.log('+')
    } else if (num < 0) {
        console.log('-')
    } else break
    i++
}