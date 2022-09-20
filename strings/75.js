let arr = [4, 2, 5, 19, 13, 0, 10]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]**2
}

console.log(sum**(1/2))