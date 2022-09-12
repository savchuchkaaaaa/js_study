let numbers = prompt('Enter 8 numbers separated by a space:')
let arr = numbers.split(' ')
let newArr = []
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
        newArr.push(arr[i])
    }
}

console.log(newArr.length)