let n = 12
let result = []
for (let i = 1; i < n+1; i++) {
    if (n % i == 0) {
        result.push(i)
    }
}

console.log(result.length)