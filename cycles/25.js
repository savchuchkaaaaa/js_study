let i = 0
let arr = []
while (i < 100) {
    n = prompt('Enter an integer number: ')
    arr.push(parseInt(n))
    if (arr[i] == arr[i - 1]) {
        console.log(arr[i] + ' = ' + arr[i-1])
        console.log(arr[i] + arr[i-1])

        break
    }
    i++
}