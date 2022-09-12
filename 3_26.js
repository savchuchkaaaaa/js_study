let i = 0
while (i < 100) {
    let n = prompt('Enter an integer number: ')
    let arr = n.split('')
    if (parseInt(arr[0]) + parseInt(arr[1]) == 7) {
        console.log('end')
        break
    }
    i++
}