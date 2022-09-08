function maskify (str) {
    newArr = []
    arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (i < (arr.length - 4)) {
            newArr += arr[i]
        } else newArr += '#'
    }
    return newArr
}
let str = prompt('Enter a phrase: ')
alert(maskify(str))

