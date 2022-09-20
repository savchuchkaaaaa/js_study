let n = 12
let result = []
for (let i = 1; i < n+1; i++) {
    if (n % i == 0) {
        result.push(i)
    }
}

sum = 0
for (let i = 0; i < result.length; i++) {
    sum += result[i]
}

console.log(sum)