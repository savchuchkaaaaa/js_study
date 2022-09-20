const arr = [1,-4,7,-6,5,12]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i]
    }
}

console.log(sum)