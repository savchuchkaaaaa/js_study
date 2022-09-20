function toSquare (num) {
    num.toString
    let result = []
    for (let i = 0; i < num.length; i++) {
        result.push(num[i]**2)
    }
    return result.join('')
}
let num = prompt('Enter an integer number: ')
console.log(toSquare(num))
