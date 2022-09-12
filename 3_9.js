let numbers = prompt('Enter 10 numbers separated by a space:')
let arr = numbers.split(' ')
let evenNumbers = []
let oddNumbers = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenNumbers.push(arr[i])
    } else oddNumbers.push(arr[i])
}

console.log("The number of even numbers: " + evenNumbers.length)
console.log("The number of odd numbers: " + oddNumbers.length)
