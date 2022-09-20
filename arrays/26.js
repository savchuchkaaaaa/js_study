function vowels(str) {
    let arr = str.split('')
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' || arr[i] == 'o' || arr[i] == 'u' || arr[i] == 'i' || arr[i] == 'e') {
            num++
        }
    }
    return num
    }   

let str1 = 'gujdetyhbcdthjoiyfcv'
console.log(vowels(str1))
